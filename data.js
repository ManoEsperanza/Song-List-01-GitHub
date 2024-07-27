const JSON_BIN_BASE_URL="https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66a24380acd3cb34a86b1dac";    

async function loadSongs() {
    console.log("data loading")

    const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`);
    console.log(response.data.record)
    console.log(response.data.record.songs[0])
    return response.data.record.songs;
}
