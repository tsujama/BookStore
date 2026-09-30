function getCommentTemplate(i, j) {
    return `
        <tr>
            <td>${books[i].comments[j].name}</td>
            <td>${books[i].comments[j].comment}</td>
        </tr>
    `;
}