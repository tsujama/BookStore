function getBookTemplate(i) {
    return `
        <div id="book_wrapper">
            <div id="book_title">
                        <h2>${books[i].name}</h2>
                    </div>
                    <div id="book_img">
                        <img src="assets/img/book_img.png">
                    </div>
                    <div class="book_infos_wrapper">
                        <div class="book_price_wrapper">
                            <div id="book_price">${books[i].price}</div>
                            <div class="book_likes_count_button">
                                <div id="book_likes">${books[i].likes}</div>
                                <div class="book_likes_button${i}">${checkIfLiked(i)}</div>
                            </div>
                        </div>
                        <div class="book_infos_table">
                            <table>
                                <tr>
                                    <td>Autor</td>
                                    <td>: ${books[i].author}</td>
                                </tr>
                                <tr>
                                    <td>Erscheinungsdatum</td>
                                    <td>: ${books[i].publishedYear}</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>: ${books[i].genre}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div id="book_comment_wrapper">
                        
                        <div class="input_wrapper">
                            <input id="input_comment" type="text">
                            <button><i class="fa-regular fa-paper-plane"></i></button>
                        </div>
                    </div>   
        </div>            
    `;
}

function getCommentTemplate(j) {
    return `
        <div id="book_comments_table">
            <table>
                <tr>
                    <td>Kommentare:</td>
                </tr>
                <tr>
                    <td>[User 1]</td>
                    <td>: Kommentar 1</td>
                </tr>
                <tr>
                    <td>[User 2]</td>
                    <td>: Kommentar 2</td>
                </tr>
                <tr>
                    <td>[User 3]</td>
                    <td>: Kommentar 3</td>
                </tr>
            </table>
        </div>
    `;
}