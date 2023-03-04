let initialPost = {title: "New Job", date: "2/17/23", summary: "I got a new job today."};
let blogPostsArray = [initialPost];
updateBlog();

export function showAddPostDialog(){
	const addPostDialog = document.getElementById("addPostDialog");
	const postTitle = document.getElementById("postTitle");
	const postDate = document.getElementById("postDate");
	const postSummary = document.getElementById("postSummary");
	const postCancel = document.getElementById("postCancel");
	const postSave = document.getElementById("postSave");

	postTitle.value = "";
	postDate.value = "";
	postSummary.value = "";

	addPostDialog.show();

	postCancel.addEventListener("click", () => {
		addPostDialog.close();
		console.log("is blogpost changed? " + blogPostsArray.length);
	});

	postSave.addEventListener("click", () => {
		const newPost = {
			title: DOMPurify.sanitize(postTitle.value),
			date: DOMPurify.sanitize(postDate.value),
			summary: DOMPurify.sanitize(postSummary.value),
		};
		
		blogPostsArray.push(newPost);
		updateBlog();
	});
}

function showEditPostDialog(post){
	const editPostDialog = document.getElementById("editPostDialog");
	let editPostTitle = document.getElementById("editPostTitle");
	let editPostDate = document.getElementById("editPostDate");
	let editPostSummary = document.getElementById("editPostSummary");
	const editPostCancel = document.getElementById("editPostCancel");
	const editPostSave = document.getElementById("editPostSave");

	editPostTitle.value = post.title;
	editPostDate.value = post.date;
	editPostSummary = post.summary;

	editPostDialog.show();

	editPostCancel.addEventListener("click", () => {
		editPostDialog.close();
	});

	editPostSave.addEventListener("click", () => {
		const newPost = {
			title: DOMPurify.sanitize(editPostTitle.value),
			date: DOMPurify.sanitize(editPostDate.value),
			summary: DOMPurify.sanitize(editPostSummary.value),
		};

		updateBlog();
	});
}

function showDeletePostDialog(post){
	const deletePostDialog = document.getElementById("deletePostDialog");
	const deleteCancel = document.getElementById("deleteCancel");
	const deleteOk = document.getElementById("deleteOk");

	deletePostDialog.show();

	deleteCancel.addEventListener("click", () => {
		deletePostDialog.close();
	});

	deleteOk.addEventListener("click", () => {
		blogPostsArray.splice(blogPostsArray.indexOf(post), 1);
		updateBlog();
	});
}

function updateBlog(){
	let blog = document.getElementById("blog");
	blog.innerHTML = "";

	blogPostsArray.forEach((i) => {
		// console.log(i.title + " | " + i.date + " | " + i.summary);
		let li = document.createElement("li");
		li.innerHTML = (i.title + " | " + i.date + " | " + i.summary);
		
		let editButton = document.createElement("button");
		editButton.innerHTML = "Edit";

		let deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";

		li.appendChild(editButton);
		editButton.addEventListener("click", () => {
			showEditPostDialog(i);
		});

		li.appendChild(deleteButton);
		deleteButton.addEventListener("click", () => {
			showDeletePostDialog(i);
		});
		blog.appendChild(li);
	})

	//localStorage.setItem("blog", JSON.stringify(blog)); // save to localStorage
}