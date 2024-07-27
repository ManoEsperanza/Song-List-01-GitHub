document.addEventListener("DOMContentLoaded", async function () {
    console.log("Loading")
    songs = await loadSongs()
    renderList();

})

function renderList() {
    let songsListDiv = document.querySelector("#playList");
    let outputString = "";
    console.log(songs);
    for (let b of songs)
        outputString += `<tr> 
    <td>${b.id }</td><td>${b.song}</d><td>${b.artist}</td><td>${b.rating}</td>
    <td>
    <button class="edit" data-bookid="${b.id}">Edit</button>
    <button class="delete" data-bookid="${b.id}">Delete</button>
    </td>
    </tr>`;

    songsListDiv.innerHTML = outputString;
}