document.addEventListener("DOMContentLoaded", async function () {
    console.log("Loading")
    songs = await loadSongs()
    renderList();

})

function renderList() {
    let songsListDiv = document.querySelector("#playList");
    let outputString = "";
    console.log(songs);
    for (let b of songs) {
        outputString += `<tr class="clear"> 
<td class="shader">${b.id}</td><td class="shader">${b.song}</d><td class="shader">${b.artist}</td><td class="shader">${b.rating}</td>
<td class="shader">
<button class="edit editbutton" data-songid="${b.id}">Edit</button>
<button class="delete deletebutton" data-songid="${b.id}">Delete</button>
</td>
</tr>`


    }
    songsListDiv.innerHTML = outputString;

    let allEditButtons = document.querySelectorAll(".edit");
    for (let button of allEditButtons) {
        console.log(button)
        button.addEventListener("click", function (event) {
            console.log("edit");
            // the first parameter for a function handling an event is the event info
            let clickedButton = event.target;
            let songid = Number(clickedButton.dataset.songid);
            let song = prompt("Enter the new song");
            let artist = prompt("Enter the new artist");
            let rating = prompt("Enter the rating");
            console.log(songs, songid, song, artist, rating);
            editSong(songs, songid, song, artist, rating);

            console.log(editSong)
            renderList();


        });
    }



    let allDeleteButtons = document.querySelectorAll(".delete");
    for (let button of allDeleteButtons) {
        button.addEventListener("click", function (event) {
            // get the book id
            let songid = Number(event.target.dataset.songid);
            deleteSong(songs, songid);
            renderList();
        })
    }

}

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function () {
    let song = document.querySelector("#song").value;
    let artist = document.querySelector("#artist").value;
    let rating = document.querySelector("#rating").value;
    addSongs(songs, song, artist, rating);
    renderList();
});

let saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function () {

    saveSongs(songs);


})





