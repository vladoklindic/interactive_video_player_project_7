$(document).ready(function(){$('video').mediaelementplayer();});

const vid = document.getElementById("video");
const text = document.getElementsByClassName("transcript")[0];
const spanTag = text.getElementsByTagName("span");

vid.addEventListener("timeupdate", () => {
	let now = vid.currentTime;

	for(let i = 0; i < spanTag.length; i++){
		if(now >= spanTag[i].getAttribute("data-start") && 
		 	now <= spanTag[i].getAttribute("data-end")){
			spanTag[i].className = "current";
		} else {
			spanTag[i].className = "";
		}
	}
});

text.addEventListener("click", (e) => {
	if(e.target.tagName === "SPAN"){
		vid.currentTime = e.target.getAttribute("data-start");
	}
});