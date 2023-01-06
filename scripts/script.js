document.getElementById("year").innerHTML = new Date().getFullYear();

const date = new Date(document.lastModified);
const shortDate = date.toLocaleDateString("en-US");
const hours = date.getHours();
const hour = ((hours + 11) % 12 + 1);
const min = date.getMinutes();
const sec = date.getSeconds();
const fullDate = `${shortDate} ${hour}:${min}:${sec}`
document.getElementById("updated").innerHTML = fullDate;

