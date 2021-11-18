const types = {
    SEASON: "season",
    OTHER: "other"
}

window.onload = function () {
    Element.prototype.setAttributes = function (obj) {
        for (var prop in obj) this.setAttribute(prop, obj[prop]);
    }

    addVideos();

    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}

function addVideos() {
    addVideoSection("Season Competition Shows", types.SEASON);
    addVideoSection("Other Shows", types.OTHER);
}

function addVideoSection(title, type) {
    const container = document.getElementById("videos-container");

    var section = document.createElement("div");
    var header = document.createElement("h3");
    header.innerHTML = title;
    header.classList.add("videos-header");

    section.appendChild(header);

    videos.filter((v) => v.type === type).forEach((video) => {
        //globals
        const playerId = `player-${video.id}`;

        // container
        var playerContainer = document.createElement("div");
        playerContainer.classList = "player-container";

        // collapse btn
        var collapseBtn = document.createElement("div");
        collapseBtn.setAttributes({
            "data-bs-toggle": "collapse",
            "data-bs-target": `#${playerId}`,
        })
        collapseBtn.classList = "collapseBtn";
        collapseBtn.innerHTML = video.name;
        var collapseIcon = document.createElement("i");
        collapseIcon.classList = "fas fa-chevron-down";
        collapseBtn.appendChild(collapseIcon);
        
        // player
        var player = document.createElement("div");
        player.classList = "player collapse";
        player.id = playerId;

        var placeholder = document.createElement("div");
        placeholder.classList = "placeholder";
        
        var videoElem = document.createElement("iframe");
        videoElem.setAttributes({
            src: video.source,
            width: 640,
            height: 480,
            allow: "autoplay",
            allowfullscreen: true,
        })
        // var videoElem = document.createElement("video");
        // videoElem.setAttributes({
        //     controls: "true",
        //     preload: "auto",
        //     width: "auto",
        //     height: "600px",
        //     poster: `assets/images/${video.source}.png`,
        //     "data-setup": "{}",
        // })
        // videoElem.classList = "video-js";
        // videoElem.id = video.id;
        // var source = document.createElement("source");
        // source.setAttribute("src", `assets/videos/${video.source + (video.extension ? `.${video.extension}` : ".mp4")}`);
        // videoElem.appendChild(source);
        
        var details = document.createElement("div");
        details.classList = "videoDetails";
        
        details.innerHTML = `
        <ul>
            <li><a href="${video.coordinates}" target="_blank">
                <span class="icon icon-location">
                </span>${video.location}</a>
            </li>
            <li><span class="icon icon-score">
                </span>${video.score}
            </li>
            <li><span class="icon icon-date">
                </span>${video.date}
            </li>
        </ul>
        `

        player.appendChild(placeholder);
        player.appendChild(videoElem);
        player.appendChild(details);

        // append elems to container
        playerContainer.appendChild(collapseBtn);
        playerContainer.appendChild(player);
        
        // append to section
        section.appendChild(playerContainer);
    });

    container.appendChild(section);
}

const videos = [
    {
        name: "South Bay Invitational",
        location: "West High School",
        coordinates: "https://goo.gl/maps/9UchQWnyySQDo5KZ9",
        date: "Oct. 2, 2021",
        score: "69",
        source: "https://drive.google.com/file/d/1hMhr_S8VWF5-j-f7-P9Z8wwygoWbLCo1/preview",
        type: types.SEASON,
        id: "sbi",
    },
    {
        name: "Baldwin Park Field Tournament",
        location: "Baldwin Park High School",
        coordinates: "https://goo.gl/maps/VgfmL7h8fo84eBmW9",
        date: "Oct. 23, 2021",
        score: "70.39",
        source: "https://drive.google.com/file/d/1OxD0eYoMmckC7uVrgIgyMt2BoFpyQjNB/preview",
        type: types.SEASON,
        id: "baldwin_park",
    },
    {
        name: "Sierra Vista Field Tournament",
        location: "Sierra Vista High School",
        coordinates: "https://goo.gl/maps/FsPbXKrL2qJJqG9W9",
        date: "Oct. 30, 2021",
        score: "72.76",
        source: "https://drive.google.com/file/d/1cdxIWTmGg_xjAUoX_3xeuEIyxySH7HW5/preview",
        type: types.SEASON,
        id: "sierra_vista",
    },
    {
        name: "Los Altos Field Tournament",
        location: "Los Altos High School",
        coordinates: "https://goo.gl/maps/PEdRpmSaTHNtQEBy7",
        date: "Nov. 6, 2021",
        score: "77.86",
        source: "https://drive.google.com/file/d/1eoZh7h9S3sxbz_RpmaQL3-Evo-g1jkXz/preview",
        type: types.SEASON,
        id: "los_altos",
    },
    {
        name: "Savanna Field Tournament",
        location: "La Palma Park",
        coordinates: "https://goo.gl/maps/LDki2FrZhtzxDzzn8",
        date: "Nov. 13, 2021",
        score: "80.33",
        source: "https://drive.google.com/file/d/1-dzhIz2xOToZdV16eG9-K4gGJTL_VCqy/preview",
        type: types.SEASON,
        id: "savanna",
    },
    // other
    {
        name: "Senior Night Halftime Show",
        location: "West High School",
        coordinates: "https://goo.gl/maps/9UchQWnyySQDo5KZ9",
        date: "Oct. 29, 2021",
        score: "N/A",
        source: "https://drive.google.com/file/d/1BHh3EiJnZ3KCtXf9lyii_jdNwVOvYa_W/preview",
        type: types.OTHER,
        id: "senior_night",
    },
    {
        name: "Monday Night Senior Fallout",
        location: "West High School",
        coordinates: "https://goo.gl/maps/9UchQWnyySQDo5KZ9",
        date: "Nov. 8, 2021",
        score: "100+++",
        source: "https://drive.google.com/file/d/1zWu4pkSmdBUTFvvsGRVB8vSZV_1SDlSJ/preview",
        type: types.OTHER,
        id: "senior_fallout",
    }
];