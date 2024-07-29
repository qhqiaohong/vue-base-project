eventImageView = function (e) {
    document.getElementById("PicturePreviewVideo").style.display = "none"
    document.getElementById("PicturePreviewImg").style.display = "block"
    document.getElementById("PicturePreviewImg").src = e
    let PicturePreview = document.getElementById("PicturePreview")
    PicturePreview.style.opacity = "0"
    PicturePreview.style.display = "block"
    setTimeout(() => {
        PicturePreview.classList.remove("PicturePreview-leave")
        PicturePreview.classList.add("PicturePreview-enter")
    }, 50);
}

play_video = function (e,v) {
    document.getElementById("PicturePreviewImg").style.display = "none"
    document.getElementById("PicturePreviewVideo").style.display = "block"
    document.getElementById("PicturePreviewVideo").src = v
    let PicturePreview = document.getElementById("PicturePreview")
    PicturePreview.style.opacity = "0"
    PicturePreview.style.display = "block"
    setTimeout(() => {
        PicturePreview.classList.remove("PicturePreview-leave")
        PicturePreview.classList.add("PicturePreview-enter")
    }, 50);
}