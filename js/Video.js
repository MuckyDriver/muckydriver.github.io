const closer = document.getElementById('close')
closer.onclick = function() { window.location = 'https://muckydriver.net/' }

const videoSelect = document.getElementById("video-select")
const videoFormatSelect = document.getElementById('video-format')
const body = document.body;

var videos = {
    ["Development Video"]: 'files/Mucky Driver W I P 24.5 - Game Footage.mp4',
    ["Euro Truck Gameplay"]: 'files/Euro Truck Simulator 2 2021-04-20 20-35-38.mp4',
    ['Truck Mesh Preview']: 'files/truck.mp4',
    ['I was made in 2004']: 'files/2004.gif'
}

var vidFormat = 'mp4'
videoSelect.onchange = function() {
    if (videos[videoSelect.value]) {
        document.getElementById("video").remove()
        if (vidFormat == 'gif') {
            const img = document.createElement('img')

            img.src = videos[videoSelect.value]
            img.id = 'video'
            img.style.width = 'auto'
            img.style.height = '100%'

            body.appendChild(img)
        } else {
            const videoClone = document.createElement('video')
            const newVid = document.createElement('source');
            const url = videos[videoSelect.value];
    
            videoClone.id = 'video'; videoClone.controls = true
            newVid.src = url; newVid.type = 'video/'+vidFormat; newVid.id = 'video-source';
            body.appendChild(videoClone)
            videoClone.appendChild(newVid)
        }
    }
}

videoFormatSelect.onchange = function() { vidFormat = videoFormatSelect.value }