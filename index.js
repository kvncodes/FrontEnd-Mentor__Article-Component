const shareBtn = document.querySelector("#share");
const shareCnt = document.querySelector(".share-container");
const authorCnt = document.querySelector(".author-footer");
const shareIcon = document.querySelector("#shareIcon");

const shareBtn2 = document.querySelector(".share-icon-bg");
const shareCnt2 = document.querySelector(".share-container-desktop");

shareBtn.addEventListener("click", function () {
	shareEvent();
});

shareBtn2.addEventListener("click", function () {
	shareEvent();
});

function shareEvent() {
	let windowWidth = window.innerWidth;
	if (windowWidth > 600) {
		shareCnt2.classList.toggle("hidden");
		shareBtn.classList.toggle("active-share-button");
		shareIcon.classList.toggle("brightness");
	} else {
		shareCnt.classList.toggle("hidden");
		authorCnt.classList.toggle("hidden");
	}
}
