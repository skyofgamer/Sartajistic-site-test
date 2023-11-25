window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-46289273-15");

let homeVideosSecondLoad = document.querySelectorAll("video");
homeVideosSecondLoad.forEach((video) => {
    video.load();
});
