let bookDiv = document.getElementById("books_wrapper");

function renderBooks() {
    bookDiv.innerHTML = "";
    console.log(books.length);
    console.log(books[0].name)
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

    books[i].comments.push({
        name: newCommentUser,
        comment: inputCommentRef
    });

    renderBooks();

    inputCommentRef = "";
}