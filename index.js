const button = document.getElementById('addListButton');
const output = document.getElementById('output');
const input = document.getElementById('input');
const createNewList = document.getElementById('createNewList');
const myArray = [];

//create a new list//
function addToList() {
    const item = input.value;
    if (item.length <= 0){
        return null;
    }
    else {
    myArray.push(item);
    input.value = '';
    displayList();
    document.getElementById('newListName').classList.toggle('show');
    }
}
function displayList(){
    let itemsString = '';
    myArray.forEach(item => {
        itemsString += `<div class="listNameStyle" id="listNameStyle">
                            <li>${item}</li>
                            <img class="trashCan" id="trashCan" src="deleteIcon.png">
                        </div>`
    });
    document.getElementById('listOfLists').innerHTML = itemsString;
}

function dropDown(){
    document.getElementById('newListName').classList.toggle('show');
}

button.addEventListener('click', dropDown);
createNewList.addEventListener('click', addToList);
document.getElementById('cancel').addEventListener('click', dropDown);

//This allows you to press enter to save a new list //
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     addToList();
    }
  });

//This allows you to delete a list on the right side//

