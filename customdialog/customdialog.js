export function showAlertDialog(){
	const alertDialog = document.getElementById("alertDialog");
	document.getElementById("output").innerHTML = "";
	alertDialog.show();
}

export function showConfirmDialog(){
	const confirmDialog = document.getElementById("confirmDialog");
	const confirmCancel = document.getElementById("confirmCancel");
	const confirmOk = document.getElementById("confirmOk");
	const output = document.getElementById("output");
	output.innerHTML = "";

	confirmDialog.show();

	confirmCancel.addEventListener("click", () => {
		output.innerHTML = "Confirm result: false";
	});

	confirmOk.addEventListener("click", () => {
		output.innerHTML = "Confirm result: true";
	});
}

export function showPromptDialog(){
	const promptDialog = document.getElementById("promptDialog");
	const promptCancel = document.getElementById("promptCancel");
	const promptOk = document.getElementById("promptOk");
	const promptInput = document.getElementById("promptInput");
	const output = document.getElementById("output");
	output.innerHTML = "";

	promptDialog.show();

	promptCancel.addEventListener("click", () => {
		output.innerHTML = "User didn't enter anything ";
	});

	promptOk.addEventListener("click", () => {
		console.log(promptInput.value);
		output.innerHTML = DOMPurify.sanitize("You entered: " + promptInput.value);
	});
}