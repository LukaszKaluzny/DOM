// console.log(document); // lub window.document

var withMenuItemsClass = document.getElementsByClassName('button');

console.log(withMenuItemsClass);

for (var x = 0; x < withMenuItemsClass.length; x++) {
	alert(withMenuItemsClass[x].innerText);
}
