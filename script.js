//your JS code here. If required.
const pt = document.getElementById('txt');
const btn = document.getElementById('btn');
const newHeading = document.createElement('h1');
newHeading.id = 'txt'
newHeading.textContent = 'Entered Metaverse';

btn.addEventListener('click', () => {
	pt.replaceWith(newHeading);
});
