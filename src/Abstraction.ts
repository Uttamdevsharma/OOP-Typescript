//amra abstraction banate pari interface ba abstract class use kore


// interface MediaPlayer {
//     play() :void;
//     pause():void;
//     stop():void
// }


// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Playing Music...")
//     }

//     pause(): void {
//         console.log("Pause music...")
//     }
//     stop(): void {
//         console.log("Stop Music...")
//     }
// }


// const instance1 = new MusicPlayer()
// instance1.play()


//idea 
abstract class MediaPlayer {
    abstract play() :void;
    abstract pause() :void;
    abstract stop():void;

    Welcome(){
        console.log("Welcome out media player and enjoy")
    }
}



//implementation
class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log("Music playing...")
    }

    pause(): void {
        console.log("Music pause...")
    }

    stop(): void {
        console.log("Music is stop")
    }
}


const instance1 = new MusicPlayer()
instance1.Welcome()
instance1.play()