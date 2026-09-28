let bookDiv = document.getElementById("books_wrapper");
let bookCommentDiv = document.getElementById("book_comment_wrapper");

function renderBooks() {
    console.log(books.length);
    console.log(books[0].name)
    for (let i = 0; i < books.length; i++) {
        bookDiv.innerHTML+= getBookTemplate(i); 

        for (let j = 0; j < books[i].comments.length; j++) {
            bookCommentDiv.innerHTML += getCommentTemplate(j);
        }

        renderComments();
    }
}

function checkIfLiked(i) {

    if (books[i].liked) {
        return `<i class="fa-solid fa-heart"></i>`;
    } else {
        return `<i class="fa-regular fa-heart"></i>`;
    }
}

function renderComments() {
    console.log(books[0].comments)
    console.log(books[0].comments.length)
    console.log(books[0].comments[0].name)
    console.log(books[0].comments[0].comment)
}