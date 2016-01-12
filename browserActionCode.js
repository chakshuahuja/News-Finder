//var url = "http://www.teritree.com/";
//window.open(url,'_blank');
	// JavaScript Document

var body=document.body;
var iconSrc = chrome.extension.getURL("Logo20.png");
var closeImage = chrome.extension.getURL("close.jpg");
var website = location.hostname;
var windowHeight = window.innerHeight;
var bodyWidth = document.body.style.width;
document.body.style.width="80%";
var id = 0;
//var store = new Array();	


//var alts = new Array();
//alert(document.images.length);

/*
$( document ).ready(function() {
    alert("bingo!");
});
*/


/*
var pickForm = document.createElement("form");
pickForm.setAttribute("name", "pickform");
pickForm.setAttribute("method","post");
pickForm.setAttribute("action","bingo.php");
*/

var maindiv = document.createElement("div");
maindiv.setAttribute("id", "mainDiv");
maindiv.setAttribute("align", "right");
maindiv.style.position="fixed";
maindiv.style.display="table";
maindiv.style.height="700px";
//maindiv.style.overflowY="scroll";width: 40%; padding-right: 0px; vertical-align: middle; display: table-cell;
//maindiv.style.overflowX="hidden";
maindiv.style.zIndex="+1000000";
maindiv.style.right="0px";
maindiv.style.top="0px";
//maindiv.style.bottom="5px";
maindiv.style.width="203px";
maindiv.style.border="2px solid #6E6E6E";
maindiv.style.backgroundColor="#F2F2F2";
maindiv.style.color="#000000";
maindiv.style.borderCollapse="seperate";
maindiv.style.borderSpacing="5px";



//but.addEventListener("click", function() {document.body.style.width=bodyWidth; mainDiv.parentNode.removeChild(mainDiv);}, false);


//pickForm.appendChild(maindiv);

//pickButDiv.addEventListener("click", function() {alert("bingo");}, false);	

//document.body.appendChild(pickForm);
document.body.insertBefore(maindiv,document.body.firstChild);

//document.body.insertBefore(pickForm,document.body.firstChild);





