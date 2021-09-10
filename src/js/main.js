// Accordion ()

$( ".side-content" ).accordion({
    active: 1,
    heightStyle : "content"
});

$( function() {
    $( ".accordion" ).accordion();
});

// Tabs
$( function() {
    $( ".accordion-content" ).tabs();
});

$( ".accordion-content" ).tabs({
    active: 0
});


// Countdown Timer
function makeTimer() {
	
    var endTime = new Date("1 January 2022 00:00:00 GMT+01:00");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html(`${days}`  + "<span style='color: #a56d3a; font-size: 13px;'>Days</span>");
	$("#hours").html(`${hours}`  + "<span style='color: #a56d3a; font-size: 13px'>Hrs</span>");
	$("#minutes").html(`${minutes}`+ "<span style='color: #a56d3a; font-size: 13px'>Mins</span>");
	$("#seconds").html(seconds + "<span style='color: #a56d3a; font-size: 13px'>Secs</span>");

}

setInterval(function() { makeTimer(); }, 1000);

// Hamburger 
var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.open').removeClass('oppenned');
    } else {
      this.classList.add("is-active");
      $(".open").addClass('oppenned');
    }
  });
}
$(".nav-bar a").click(function(event) {
  $(".open").removeClass('oppenned');
  $(".c-hamburger").removeClass('is-active');
});

$(function(){
    $(".nav-bar-item").bind("click", function(){
        $(".nav-bar-item").removeClass("clicked"); // Remove all highlights
        $(this).addClass("clicked"); // Add the class only for actually clicked element
    });
});


// Read more/read less
function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    var carLmt = 210;
    // Text to show when text is collapsed
    var readMoreTxt = " ... Read More";
    // Text to show when text is expanded
    var readLessTxt = " Read Less";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}

$(function() {
    //Calling function after Page Load
    AddReadMore();
});


$(document).ready(function() {
    $('.footer-heading1').click(function() {
            $('.footer-list1').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('.footer-heading2').click(function() {
            $('.footer-list2').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('.footer-heading3').click(function() {
            $('.footer-list3').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('.footer-heading4').click(function() {
            $('.footer-list4').slideToggle("fast");
    });
});


$(window).load(function() {
    // When the page has loaded
    $("body").fadeIn(1200);
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


