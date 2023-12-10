function searchNames() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var nameList = document.getElementById('nameList');
    var names = nameList.getElementsByTagName('li');

    for (var i = 0; i < names.length; i++) {
        var name = names[i].innerText.toLowerCase();
        if (name.includes(searchValue)) {
            names[i].style.display = 'block';
        } else {
            names[i].style.display = 'none';
        }
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        searchNames();
    }
}