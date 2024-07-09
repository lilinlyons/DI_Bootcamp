class Video{
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }

}

const video1 = new Video('Harry Potter', 'Lucy', 50)
console.log(video1.watch())

const video2= new Video('Barbie', 'Amy', 60)


const arrayOfVideos = [
    video1,
    video2,
    new Video('Jurrasic World', 'Tom', 1150)
]

console.log(arrayOfVideos);

arrayOfVideos.forEach(video => video.watch())