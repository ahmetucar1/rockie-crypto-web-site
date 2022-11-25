//Crypto Panel Menu Button
var cryptoMenu = document.getElementById("cryptoMenuTable");
var elementLi = cryptoMenu.getElementsByClassName("table-menu-item");
for (var i = 0; i < elementLi.length; i++) {
elementLi[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}


//Market Update Menu Button
var coinMenuListt = document.getElementById("coinMenuList");
var elementList = coinMenuListt.getElementsByClassName("table-menu-list");
for (var i = 0; i < elementList.length; i++) {
elementList[i].addEventListener("click", function() {
var currentLi = document.getElementsByClassName("select");
currentLi[0].className = currentLi[0].className.replace(" select", "");
this.className += " select";
});
}