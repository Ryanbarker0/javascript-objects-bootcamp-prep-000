var playlist = { Eminem: 'Lose Yourself' }

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(myPlaylist, artistName) {

}
