document.addEventListener('DOMContentLoaded', function() {
    initialize();

	document.addEventListener('click', event => { //unused as of 20.10.29
		const element = event.target;
		console.log("Something was clicked");
	})
});

function initialize(){
    console.log("You are now on the createbug page, This is being printed from the intialize function...")
}