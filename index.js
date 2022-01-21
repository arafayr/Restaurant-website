// / When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");
var navitems = document.getElementById("navitems");
var headericon = document.getElementById("headericon")
// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log("sticky",sticky)
console.log("header",header)

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyheader");
    navitems.classList.add("stickyheadernav-list-item")
    headericon.classList.add("stickyheadersocialicon")
    
  } else {
    header.classList.remove("stickyheader");
    navitems.classList.remove("stickyheadernav-list-item")
    headericon.classList.remove("stickyheadersocialicon")

  }
}
