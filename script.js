// STEP 6: We need a name to refer to all the <h2> elements
const handles = document.querySelectorAll("");

for(let i = 0; i < handles.length; i++){
	// STEP 7: Now we need each <h2> to 'listen' for the user to touch it - add the "click" event listener to the addEventListener method below
	handles[i].addEventListener("", accordion);
}

function accordion(event){
	// STEP 8: Loop through all <h2> handles and remove the class "open", so they are closed
	for(let i = 0; i < handles.length; i++){
		handles[i].classList.remove("");
	}
	// STEP 9: Add the class "open" to the <h2> element that the user touched, so it is open. Test out the app below, then go to CSS for the last step.
	event.target.classList.add("")
}

