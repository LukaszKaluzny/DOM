// console.log(document); // lub window.document

var withMenuItemsClass = document.getElementsByClassName('button');

console.log(withMenuItemsClass);

for (withMenuItemsClass[0]; withMenuItemsClass[4]; withMenuItemsClass++) {
	alert(withMenuItemsClass[0].innerText);
	alert(withMenuItemsClass[1].innerText);
	alert(withMenuItemsClass[2].innerText);
	alert(withMenuItemsClass[3].innerText);
	alert(withMenuItemsClass[4].innerText);
}
