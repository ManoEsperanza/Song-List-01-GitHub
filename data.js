const JSON_BIN_BASE_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66a24380acd3cb34a86b1dac";

async function loadSongs() {
    console.log("data loading")

    const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`);
    console.log(response.data.record)
    console.log(response.data.record.songs[0])
    return response.data.record.songs;

}

async function saveSongs(songs) {
    console.log("saved")
    const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}`, { songs: songs });
    console.log(response.data);

}

let songs = [];


function addSongs(songs, song, artist, rating) {
    let songinfo = {
        "id": Math.floor(Math.random() * 10000 + 1),
        "song": song,
        "artist": artist,
        "rating": rating,
    }
    // title cannot be empty and author cannot be empty
    if (song == "song" || artist == "artist") {
        alert("Please provide a song or an artist");
        // terminate the function
        return;
    }

    songs.push(songinfo);
}


function editSong(songs, songid, song, artist, rating) {
    // use a linear search to find the book
    let songToEdit = null;
    for (let b of songs) {
        console.log(b)
        if (b.id === songid) {
            // console.log("found>>> ", b)
            songToEdit = b;
            break;
        }
    }
    console.log(songid)
    console.log(songToEdit)
    // songToEdit.songid = songid;
    songToEdit.song = song
    songToEdit.artist = artist;
    songToEdit.rating = rating;
    // console.log("AFTER EDIT>>>",songToEdit);


}

function deleteSong(songs, songid) {
    // find the index of the book to delete
    let indexToDelete = null;
    let index = -1; // start from -1 because the first element to 0

    for (let b of songs) {
        index = index + 1;
        if (b.id == songid) {
            indexToDelete = index;
            break;
        }
    }

    songs.splice(indexToDelete, 1);

}