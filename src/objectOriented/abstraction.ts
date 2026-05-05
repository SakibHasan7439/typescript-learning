// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("play the music");
//     };

//     pause(): void {
//         console.log("music paused !");
//     }

//     stop(): void {
//         console.log("Music Stopped!");
//     }
// }

// const newPlayer = new MusicPlayer();

// newPlayer.play();


abstract class MediaPlayer {
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}

class NewPlayer extends MediaPlayer {
    play(): void {
        console.log("Play the music");
    };

    pause(): void {
        console.log("Music paused !");
    }

    stop(): void {
        console.log("Music Stopped!");
    }
}


const myPlayer = new NewPlayer();

myPlayer.play();
myPlayer.pause();
myPlayer.stop();