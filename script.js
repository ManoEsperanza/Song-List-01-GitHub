document.addEventListener("DOMContentLoaded", async function () {
    console.log("Loading")
    songs = await loadSongs()
    renderList();

    let allEditButtons = document.querySelectorAll(".edit");
    for (let button of allEditButtons) {
        console.log(button)
        button.addEventListener("click", function (event) {
            console.log("edit");
            // the first parameter for a function handling an event is the event info
            let clickedButton = event.target;
            let songid = Number(clickedButton.dataset.songid);
            let songs = prompt("Enter the new song");
            let artist = prompt("Enter the new artist");
            let rating = prompt("Enter the rating")
            editSong(songid, songs, artist, rating);
            // renderList();

        });
    }

})

function renderList() {
    let songsListDiv = document.querySelector("#playList");
    let outputString = "";
    console.log(songs);
    for (let b of songs)
        outputString += `<tr> 
    <td>${b.id}</td><td>${b.song}</d><td>${b.artist}</td><td>${b.rating}</td>
    <td>
    <button class="edit" data-songid="${b.id}">Edit</button>
    <button class="delete" data-songid="${b.id}">Delete</button>
    </td>
    </tr>`

    songsListDiv.innerHTML = outputString;
}

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function () {
    let songs = document.querySelector("#song").value;
    let artist = document.querySelector("#artist").value;
    let rating = document.querySelector("#rating").value;
    addsong(songs, artist, rating);
    renderList();
});

let saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function () {
    saveSongs(songs);
})

let allDeleteButtons = document.querySelectorAll(".delete");
for (let button of allDeleteButtons) {
    button.addEventListener("click", function (event) {
        // get the book id
        let songid = Number(event.target.dataset.songid);
        deleteSong(songs, songid);
        renderList();
    })
}

