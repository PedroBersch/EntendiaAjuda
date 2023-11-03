const url = "http://www.boredapi.com/api/activity/";
const button = document.querySelector("#button");
const textAreaEl = document.querySelector("#textarea-idea");
const typeEl = document.querySelector("#type");
const participantsEl = document.querySelector("#participants");
const priceEl = document.querySelector("#price");
const accessibilityEl = document.querySelector("#accessibility");
async function getRandom(){
    let randomText = await getData();
    textAreaEl.value = randomText.activity;
}

window.addEventListener("load", getRandom);


async function getData(){
    const res = await fetch(url);
    let data = await res.json();
    return data;
}