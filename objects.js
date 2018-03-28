var playlist = { Eminem: 'Lose Yourself' }

function updatePlaylist(playlist, artistName, songTitle) {
    Object.assign(playlist, { [artistName]: songTitle })
    console.log(playlist)
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName
    return playlist
}
