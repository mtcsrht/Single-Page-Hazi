let input = document.getElementById('addToList');
let lista = document.getElementById('lista');
let add = document.getElementById('add');
let listArray = [];

add.addEventListener('click', function () {
    let value = input.value;
    console.log("value: "+value)
    let li = document.createElement('li');
    li.textContent = value;
    let listItems = lista.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listArray.push(listItems[i].innerHTML);
    }
    if (listArray.includes(value)) {
        alert("Ez az item már létezik!");
    } else {
        lista.appendChild(li);
        input.value = "";
    }
});

let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Form submit!");
    console.log(document.getElementById('name').value);
});
