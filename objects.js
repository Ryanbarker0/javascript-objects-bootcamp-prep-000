var playlist = { Eminem: 'Lose Yourself' }

function updatedPlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, { [artist]: songTitle })
}

function removeFromPlaylist(myPlaylist, artistName) {

}
