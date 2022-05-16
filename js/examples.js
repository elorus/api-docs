const lists = Array.prototype.slice.call(document.getElementsByClassName('menu-item'))

function init() {
    toggleList(lists[0].id)
}

init();

function toggleList(id) {
    lists.forEach(function (list) {
        if (list.id != id) {
            list.parentElement.firstChild.style.background = "#f1f1f1"
            list.parentElement.firstChild.style.color = "black";
            list.style.display = "none";
        } else {
            list.parentElement.firstChild.style.background = '#263238';
            list.parentElement.firstChild.style.color = '#ffffff';
            list.style.display = "block";
        }
    })
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
