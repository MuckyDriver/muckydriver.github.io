const closer = document.getElementById('close')
closer.onclick = function() { window.location = 'https://muckydriver.net/' }

const videoSelect = document.getElementById("video-select")
const body = document.body;

var videos = {
    ["Development Video"]: 'files/Mucky Driver W I P 24.5 - Game Footage.mp4',
    ["Euro Truck Gameplay"]: 'files/Euro Truck Simulator 2 2021-04-20 20-35-38.mp4'
}

videoSelect.onchange = function() {
    const video = document.getElementById("video")

    if (videos[videoSelect.value]) {
        video.remove()
        var url = videos[videoSelect.value];

        const videoClone = document.createElement('video')
        videoClone.id = 'video'
        videoClone.controls = true

        const newVid = document.createElement('source');
        newVid.src = url;
        newVid.type = 'video/mp4';
        newVid.id = 'video-source';

        body.appendChild(videoClone)
        videoClone.appendChild(newVid)
    }
}