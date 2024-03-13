
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year:number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 85,
    songDuration: 5,
    song: "One",
    details:{
        author: "U2",
        year: 2000
    }
}


const {audioVolume:anothersong, songDuration:duration, details} = audioPlayer;
const audioVolume = 52;

const {author, year} = details;

console.log(author,year);
console.log(anothersong);
console.log(audioVolume);
console.log(duration);
console.log(audioPlayer.audioVolume);


export {}