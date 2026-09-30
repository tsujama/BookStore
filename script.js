let bookDiv = document.getElementById("books_wrapper");

function renderBooks() {
    bookDiv.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        bookDiv.innerHTML+= getBookTemplate(i);
        
        let bookComment = document.getElementById("comment_table"+i);

        for (let j = 0; j < books[i].comments.length; j++) {
            bookComment.innerHTML += getCommentTemplate(i, j);
        }
    }
}

function checkIfLiked(i) {

    if (books[i].liked) {
        return `<i class="fa-solid fa-heart"></i>`;
    } else {
        return `<i class="fa-regular fa-heart"></i>`;
    }
}

function addComment(i) {
    let inputCommentRef = document.getElementById("input_comment"+i).value;
    let newCommentUser = "User"+ Math.floor(Math.random() * 100);

    if(inputCommentRef != "") {
        books[i].comments.push({
            name: newCommentUser,
            comment: inputCommentRef
        });

        renderBooks();

        inputCommentRef = "";
    }
}

function toggleLike(i) {

    let toggleButton = document.getElementById("book_likes_button"+i);
    let booksLikes = document.getElementById("book_likes"+i);

    if(books[i].liked) {
        toggleButton.innerHTML=`<i class="fa-regular fa-heart"></i>`;
        books[i].likes = books[i].likes - 1;
        books[i].liked = false;
    } else {
        toggleButton.innerHTML=`<i class="fa-solid fa-heart"></i>`;
        books[i].likes = books[i].likes + 1;
        books[i].liked = true;
    }
    renderBooks();
}