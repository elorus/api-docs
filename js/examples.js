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
};
