let audio = document.getElementById('audio')
let audioSource = document.getElementById('audioSource')
let logo = document.getElementById('logo')
let song = document.getElementById('song')
let artist = document.getElementById('artist')
let video = document.getElementById('video')
let playAndPause = document.getElementById('playAndPause')
let music_range = document.getElementById('music_range')
let timeStart = document.getElementById('timeStart')
let timeEnd = document.getElementById('timeEnd')

let tracks = [
  {
    song: 'Hard Skool',
    artist: "Guns N' Roses",
    logo: "./assets/Artist/Gunsnroses/Guns N' Roses.png",
    file: "./assets/Artist/Gunsnroses/Guns N' Roses - Hard Skool.mp3",
    video: './assets/Artist/Gunsnroses/Guns n roses- Hard Sckool.mp4'
  },

  {
    song: 'Patience',
    artist: ' Chris Cornell',
    logo: './assets/Artist/Chris Cornell/Chris Cornell.png',
    file: './assets/Artist/Chris Cornell/Chris Cornell - Patience.mp3',
    video: './assets/Artist/Chris Cornell/Chris Cornell - Patience.mp4'
  },

  {
    song: 'Easy On Me',
    artist: ' Adele',
    logo: './assets/Artist/Adele/Adele.png',
    file: './assets/Artist/Adele/Adele – Easy On Me.mp3',
    video: './assets/Artist/Adele/Adele – Easy On Me .mp4'
  }
]

let index = 0

function playtrack(index) {
  logo.style.backgroundImage = 'url("' + tracks[index].logo + '")'
  video.src = tracks[index].video
  song.innerText = tracks[index].song
  artist.innerText = tracks[index].artist
  audioSource.src = tracks[index].file

  audio.load()
}

playtrack(index)

let playingSong = false
function playsong() {
  if (playingSong == false) {
    audio.play()
    video.play()
    playAndPause.src = './assets/icons/pause.png '
    return (playingSong = true)
  } else {
    audio.pause()
    video.pause()
    playAndPause.src = './assets/icons/play.png '
    return (playingSong = false)
  }
}

function next() {
  if (index == tracks.length) {
    index = 0
    playtrack(index)
    playingSong = false
    playsong()
  } else {
    index++
    playtrack(index)
    playingSong = false
    playsong()
  }
}

function back() {
  if (index == 0) {
    index = tracks.length
    playtrack(index)
    playingSong = false
    playsong()
  } else {
    index--
    playtrack(index)
    playingSong = false
    playsong()
  }
}

function nextSong() {
  let totalTime = audio.duration
  let currentTime = audio.currentTime

  if (currentTime == totalTime) {
    next()
  }
}
music_range.addEventListener('input', time)
function time() {
  audio.currentTime = music_range.value
  video.currentTime = music_range.value
}

function timing() {
  music_range.max = audio.duration
  music_range.value = audio.currentTime

  let minutes = Math.floor(audio.currentTime / 60)
  let seconds = Math.round(audio.currentTime % 60)
  let minutesTotal = Math.floor(audio.duration / 60)
  let secondsTotal = Math.round(audio.duration % 60)

  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  if (minutesTotal < 10) {
    minutesTotal = '0' + minutesTotal
  }
  if (secondsTotal < 10) {
    secondsTotal = '0' + secondsTotal
  }

  timeStart.innerText = minutes + ':' + seconds
  timeEnd.innerText = minutesTotal + ':' + secondsTotal

  nextSong()
}

setInterval(timing, 1000)

function retroceder() {
  audio.currentTime -= 5
}

function foward() {
  audio.currentTime += 5
}
