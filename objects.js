var playlist = { Eminem: 'Lose Yourself' }

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, { [artist]: songTitle })
}

function removeFromPlaylist(myPlaylist, artistName) {

}
