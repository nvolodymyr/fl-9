'use strict';
const MAX_LENGTH = 10;
const ZERO = 0;
let rootNode = document.getElementById('root');
console.log(rootNode);
let superbutton = document.getElementById('but');
console.log(superbutton);
let actionText = document.getElementById('actionText');
let actionList = document.getElementById('todo-cat-list');
let dazzle = document.getElementById('dazzle');
let mag_eleven=11;
let Two=2;
console.log(actionList);
//rootNode.appendChild(/* Append your list item node*/);
//input Listener
actionText.addEventListener('input', function (e) {
    if (actionText.value.trim !== '') {
        superbutton.classList.add('enabled'); 
    
    } else {
        superbutton.classList.remove('enabled');
    }
});
//button Listener
superbutton.addEventListener('click', (e) => {
    if (!actionText.value.trim()) {
        return;
    }
    if (actionList.children.length < mag_eleven) {
        actionList.appendChild(addActionElement(actionText.value));
        actionText.value = '';
        superbutton.classList.remove('enabled');
    }
    if (actionList.children.length >= MAX_LENGTH) {
        actionText.disabled = true;
        dazzle.style.display = 'block';
    }
});

function addActionElement(text) {
    const checIcon = document.createElement('i');
    checIcon.className = 'material-icons';
    checIcon.textContent = 'check_box_outline_blank';
    const delelem = document.createElement('i');
    delelem.className = 'material-icons';
    delelem.textContent = 'delete';
    const spanElement = document.createElement('span');
    spanElement.textContent = text;
    const div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.className = 'todo-action';
    div.appendChild(checIcon);
    div.appendChild(spanElement);
    div.appendChild(delelem);
    return div;
}
actionList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName !== 'I') {
        return;
    }
    if (target.textContent === 'check_box_outline_blank') {
        target.textContent = 'check_box';
        target.classList.add('checked');
    }
    if (target.textContent === 'delete') {
        target.parentElement.remove();
        if (actionList.children.length < MAX_LENGTH) {
            dazzle.style.display = 'none';
        }
        if (actionList.children.length === MAX_LENGTH) {
            superbutton.classList.remove('disabled');
            actionText.disabled = false;
            dazzle.hidden = true;
        }
    }
}, false);

function actionTarget(event) {
    const target = event.target;
    if (target.hasAttribute('draggable')) {
        return target;
    } else if (target.tagName === 'I' || target.tagName === 'SPAN') {
        return target.parentElement;
    } else {
        return;
    }
}
let draggableElement = null;
let dropPosition = null;
actionList.addEventListener('dragstart', (e) => {
    draggableElement = actionTarget(e);
    if (!draggableElement) {
        return;
    }
    draggableElement.style.opacity = '.7';
}, false);
actionList.addEventListener('dragend', (e) => {
    draggableElement.style.opacity = '';
});
actionList.addEventListener('dragover', (e) => {
    e.preventDefault();
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
    let rect = dropPosition.getBoundingClientRect();
    let midline = rect.top + (rect.bottom - rect.top) / Two;
});
actionList.addEventListener('dragleave', (e) => {
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
});
actionList.addEventListener('drop', function (e) {
    dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
    e.preventDefault();
    let rect = dropPosition.getBoundingClientRect();
    let midline = rect.top + (rect.bottom - rect.top) / Two;
    let afterDropPosition = midline <= e.clientY ? dropPosition.nextSibling : dropPosition;
    actionList.insertBefore(draggableElement, afterDropPosition);
});
