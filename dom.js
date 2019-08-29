//Examine the document object

/* console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[12]);
document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links); */

//console.log(document.images);
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
/* headerTitle.textContent = 'Hello';
headerTitle.innerHTML = 'GoodBye';
console.log(headerTitle.innerText); */
//headerTitle.innerHTML = '<h3>HEllo</h3>'
header.style.borderBottom = '3px solid black';

/*var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'Bold';
//items[2].style.backgroundColor = 'yellow';

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'lightgray';
} 

//GetElementsByTagName

var li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'Bold';
//items[2].style.backgroundColor = 'yellow';

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'lightgray';
} 

//QuerySelector //
var header = document.querySelector('#main-header');
header.style.borderBottom = '5px solid black';
var input = document.querySelector('input');
input.value = 'Hello World ';
var submit = document.querySelector('input[type = "submit"]');
submit.style.color = 'yellow';
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'navy'; 

//Query Selector All //
var titles = document.querySelectorAll('.title');
console.log(titles); */

// TRAVERSING THE DOM // 
//var itemList = document.querySelector('#items');
//parent node
/* console.log(itemList.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = 'gray'; */

//Child NODES

/* console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'Yellow';

//FIRST ELEMENT CHILD

console.log(itemList.firstElementChild);

// LAST ELEMENT CHILD

console.log(itemList.lastElementChild);
console.log(itemList.lastElementChild.textContent = 'hello');
//itemList.innerHTML = 'Hello World ';

// Next Sibling //

console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.borderBottom = '6px solid navy';

// Create Element //

// Create a Div //
var newDiv = document.createElement('div');
newDiv.id = 'hello';
newDiv.style.width = '50%';
newDiv.style.height = '40%';
newDiv.style.backgroundColor = 'navy';

//Create Text Node
var newDivText = document.createTextNode('Hello World');

//Add Text to div
newDiv.appendChild(newDivText);

var belowFirstContainer = document.querySelector('header');
var container = document.querySelector('header .container');

console.log(newDiv);
console.log(document.querySelector('header'));
belowFirstContainer.insertBefore(newDiv, container); */

//  EVENTS //

//var button = document.getElementById('button').addEventListener(
//    'click', buttonClick
//);

//unction buttonClick(e) {
/* var listgroup = document.getElementsByClassName('list-group-item');
listgroup[2].style.backgroundColor = 'navy';
listgroup[2].style.color = 'white'; 
listgroup[1].style.backgroundColor = 'yellow'; */
// console.log(e.target);
//console.log(e.target.id);
//  console.log(e);
//console.log(e.offsetX);
//console.log(e.altKey);
//}
//var button = document.getElementById('button');
//var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mouseenter', runEvent);
//button.addEventListener('mouseleave', runEvent);
//box.addEventListener('mouseover', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);
//box.addEventListener('mousemove', runEvent);

//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
//var select = document.querySelector('select');
//itemInput.addEventListener('keydown', runEvent);
//select.addEventListener('change', runEvent);
//form.addEventListener('submit', runEvent);


/* function runEvent(e) {
    e.preventDefault();
    console.log('Event Type: ' + e.type);
    // console.log(e.target.value);
    //console.log(e.target.value);
    // console.log('Event Type: ' + e.type);
    // document.getElementById('output').innerHTML = e.target.value;
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>';
    // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ',' + e.offsetX + ')';
} */


// DOM CRASH COURSE PART 4 (ADD AND DELETE ITEMS) //

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event

form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
//add Item

function addItem(e) {
    e.preventDefault();

    //Get Input value

    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class Name
    li.className = "list-group-item";
    console.log(li);

    //Add textnode with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Apppend Text Node

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);


    itemList.appendChild(li);


}
// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e) {
    //convert text uppercase to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    //Get li's
    var items = itemList.getElementsByTagName('li');
    console.log(items);

}

//Creating my Own Variables
let containerId = document.getElementById('containerId');
console.log('My container id '+containerId);
let myLi = document.createElement('h2');
myLi.style.color = 'navy'; 
myLi.appendChild(document.createTextNode('This is h2 tag '));
containerId.appendChild(myLi);



