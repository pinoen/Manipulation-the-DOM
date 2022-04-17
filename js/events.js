// Function to modify the text content of the paragraph. First method.
// const changeText = () => {
// 	const p = document.querySelector('p');

// 	p.textContent = "I changed because of an inline event handler.";
// }



//This is the second method:
// let changeText = function(){
//   let p = document.querySelector('p');
//   p.textContent = 'I changed because of event handler properties.'
// }
// let button = document.querySelector('button');
// button.onclick = changeText;

//Still is not the recommended one because will cause all but the last one to be overwritten:
// const p = document.querySelector('p');
// const button = document.querySelector('button');

// const changeText = () => {
// 	p.textContent = "Will I change?";
// }

// const alertText = () => {
// 	alert('Will I alert?');
// }

// // Events can be overwritten
// button.onclick = changeText;
// button.onclick = alertText;


// An finally the preferable method:
// function changeText(){
//   let p = document.querySelector('p');
//   p.textContent = 'I changed because of an event listener!.'
// }
// let button = document.querySelector('button');
// button.addEventListener('click', changeText);

//It has the following advantage:
const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
	p.textContent = "Will I change?";
}
const alertText = () => {
	alert('Will I alert?');
}
// Multiple listeners can be added to the same event and element
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);


//Often, anonymous functions will be used instead of a function reference on an event listener:
button.addEventListener('click', () => {
  p.textContent = 'This is the final message: You can do it!';
});

// Remove alert function from button element:
button.removeEventListener('click', alertText);

// Test the key and code properties
document.addEventListener('keydown', event => {
	console.log('key: ' + event.key);
	console.log('code: ' + event.code);
});