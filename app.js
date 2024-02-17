var todoContainer = document.getElementById("todoContainer");
var input = document.getElementById("input");

function addTodo() {
    var makePara = document.createElement('P');
    var text = document.createTextNode(input.value);
    makePara.innerHTML = input.value;
    makePara.setAttribute('class', 'newPara');

    // Delete button
    var deleteBtn = document.createElement("Button");
    var delName = document.createTextNode('Delete');
    deleteBtn.setAttribute('class', 'forDele');
    deleteBtn.setAttribute('onclick', 'delFun(this)');
    deleteBtn.appendChild(delName);

    // Edit button
    var editBtn = document.createElement("Button");
    var editName = document.createTextNode('Edit');
    editBtn.setAttribute('class', 'forEdit');
    editBtn.setAttribute('onclick', 'editFun(this)');
    editBtn.appendChild(editName);

    // Append the delete and edit buttons to the paragraph
    makePara.appendChild(deleteBtn);
    makePara.appendChild(editBtn);

    // Append the paragraph to the todoContainer
    todoContainer.appendChild(makePara);

    // Empty the input field so we can write again
    input.value = "";
}

// To delete, we make a function which we declared before
function delFun(elem) {
    var sent = elem.parentNode;
    sent.remove();
}

// To edit, create a new function
function editFun(elem) {
    var newText = prompt("Edit Text :");
    if (newText !== null) {
        elem.parentNode.childNodes[0].nodeValue = newText;
    }
}

function deleteAll() {
    todoContainer.innerHTML = "";
}

