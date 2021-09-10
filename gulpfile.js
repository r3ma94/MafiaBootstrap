const gulp = require('gulp'),

    { src, dest, watch }  = require('gulp'),
    minify = require('gulp-minify'),
    minifyCss = require('gulp-clean-css'),
    rimraf = require('gulp-rimraf'),
    notify       = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps');

const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');



const config = {
    minifyCss: true,
    uglifyJS: false

}

// CSS
gulp.task('css', function() {
    return css();
});

// JS
gulp.task('js', function() {
    return js();
});

// Images
gulp.task('images', function() {
    return gulp
      .src('src/images/**/*')
      .pipe(gulp.dest('dist/images'))
      .pipe(notify({ message: 'Successfully processed images' }));
});

// Fonts
gulp.task('fonts', function() {
    return gulp
      .src([
        'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
        'src/fonts/**/*'
      ])
      .pipe(gulp.dest('dist/fonts'))
      .pipe(notify({ message: 'Successfully processed fonts' }));
});

gulp.task('webfonts', function() {
    return gulp
        .src([
            'node_modules/@fortawesome/fontawesome-free/webfonts/fa-*.*',
            'src/webfonts/**/*'
        ])
        .pipe(gulp.dest('dist/webfonts'))
        .pipe(notify({ message: 'Successfully processed webfonts' }));
});



gulp.task('clean', function() {
    return gulp
      .src(['dist/css', 'dist/js', 'dist/images', 'dist/fonts', 'dist/webfonts'], {read: false, allowEmpty: true})
      // TODO: napraviti proveru da li postoje svi direktorijumi za brisanje ako ne preskociti direktorijum koji fali i nastaviti dalje, proveriti lib "rimraf" sigurno ima metoda za to.
        // Odradjeno
      .pipe(rimraf());
});


gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    gulp.watch("dist/*.html").on('change', browserSync.reload);
}));

gulp.task('sourcemaps', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});



function js() {
    var scripts = [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery-ui-dist/jquery-ui.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
        'src/js/main.js'

    ];
    return gulp
      .src(scripts)
      .pipe(gulp.dest('dist/js'))
      .pipe(notify({ message: 'Successfully processed JS' }));
}