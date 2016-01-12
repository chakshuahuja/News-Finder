var pageModifier = function(selText) {
	var body=document.body;
	var iconSrc = chrome.extension.getURL("Logo20.png");
	var closeImage = chrome.extension.getURL("close.jpg");

	var website = location.hostname;
	var windowHeight = window.innerHeight;
	var bodyWidth = document.body.style.width;
	document.body.style.width="80%";

	var id = 0;
	var div = document.createElement("div");
	div.setAttribute("id", "MainDiv");
	div.setAttribute("align", "right");
	div.style.position="fixed";
	div.style.display="table-row";
	//div.style.height="700px";
	//div.style.overflowY="scroll";
	div.style.overflowX="hidden";
	div.style.zIndex="+1000000";
	div.style.right="0px";
	div.style.top="45px";
	//div.style.bottom="0px";
	div.style.width="200px";
	div.style.border="2px solid #6E6E6E";
	//table.style.textAlign="center";
	div.style.backgroundColor="#D8D8D8";
	div.style.color="#000000";
	div.style.borderCollapse="collapse";
	div.style.borderSpacing="5px";



	var rowDiv = document.createElement("div");
	rowDiv.style.display="table-row";
	rowDiv.style.float="left";
	//rowDiv.style.lineHeight="1";
	rowDiv.style.paddingTop="0px";
	rowDiv.style.width = "100%";

	var buttonDiv = document.createElement("div");
	buttonDiv.style.width = "30%";
	buttonDiv.style.paddingRight="5px";
	buttonDiv.style.paddingTop="5px";
	buttonDiv.style.paddingLeft="20px";
	buttonDiv.style.verticalAlign="middle";
	buttonDiv.style.display="table-cell";

	var textDiv = document.createElement("div");
	//textDiv.setAttribute("id", "SourceDiv");
	textDiv.style.verticalAlign="left";
	textDiv.style.float="left";
	textDiv.style.paddingLeft="5px";
	textDiv.style.paddingTop="5px";
	//textDiv.style.width="100%";
	textDiv.style.verticalAlign="middle";
	textDiv.style.display="table-cell";
	textDiv.style.textAlign="left";
	textDiv.innerHTML='<font face="Lucida Calligraphy" size="4x" color="white"><strong>'+"Related News"+'</strong></font>';
	rowDiv.appendChild(textDiv);


	var closeImage = chrome.extension.getURL("close.jpg");
	var but = document.createElement("img");
	but.src = closeImage;
	buttonDiv.appendChild(but);

	rowDiv.appendChild(buttonDiv);
	div.appendChild(rowDiv);

	var rowDiv = document.createElement("div");
	rowDiv.style.display="table-row";
	rowDiv.style.float="left";
	//rowDiv.style.lineHeight="1";
	rowDiv.style.paddingTop="0px";
	rowDiv.style.width = "100%";
	rowDiv.innerHTML='<hr>';
	div.appendChild(rowDiv);
	
	var encoded = "";
	var j = 0;
	console.log(selText);
	for (var i = 0; i < selText.length; i++) {
		var x = selText.charAt(i);
		if (x == ':') {
			
			encoded+='\\';
			encoded+=x;
			
			console.log("Bingo");
		}
		else {
			
			encoded+=x;
		}
	}
	console.log(encoded);
	var URL = "http://localhost:8983/solr/TheHindu/select?q="+encoded+"&fl=article_title%2C+article_url&wt=json&indent=true";
	
	var resp = null;
	//resp = httpGet(URL);
	var resp;
	var xhr = new XMLHttpRequest();
	xhr.open( "GET", URL, false );
	xhr.onreadystatechange = function() {
		//console.log(xhr.readyState);
		if (xhr.readyState == 4) {
			resp = eval ("("+xhr.responseText+")");
			//alert(resp);
			//console.log("resp= "+resp);
			}
		}
	xhr.send();
	console.log("response = "+JSON.stringify(resp));
	//alert("response = "+JSON.stringify(resp));
	
	var lnk = new Array();
	var title = new Array();
	/*
	for (var i=0; i<resp.response.docs.length; i++) {
		console.log(resp.response.docs[i].article_title);
	}
	*/
	var j = 0, k = 0;
	for (var i = 0; i < resp.response.docs.length; i++){
		if (i != 0 && title[k-1] != resp.response.docs[i].article_title[0]) {
			lnk[j++] = resp.response.docs[i].article_url[0];
			title[k++] = resp.response.docs[i].article_title[0];
		}
	}
	/*
	for (var i=0; i<lnk.length; i++) {
		console.log(lnk[i]);
		console.log(title[i]);
	}
	*/
	
	for (var i = 0; i < k; i++){	
		var rowDiv = document.createElement("div");
		rowDiv.style.display="table-row";
		rowDiv.style.float="right";
		//rowDiv.style.lineHeight="1";
		rowDiv.style.paddingTop="0px";
		rowDiv.style.paddingLeft="5px";
		rowDiv.style.width = "100%";
		var textDiv = document.createElement("div");
		textDiv.setAttribute("id", "SourceDiv");
		textDiv.style.verticalAlign="left";
		textDiv.style.float="left";
		textDiv.style.paddingLeft="5px";
		textDiv.style.paddingRight="3px";
		textDiv.style.paddingTop="5px";
		//textDiv.style.width="100%";
		//textDiv.style.verticalAlign="middle";
		textDiv.style.display="table-cell";
		textDiv.style.textAlign="left";
		textDiv.innerHTML='<a href='+lnk[i]+' target="_blank"><font face="Calibri" size="3px" color=black><strong> '+title[i]+'</strong></font></a>';
		//textDiv.style.borderBottom="thin solid #000000";
		rowDiv.appendChild(textDiv);
		div.appendChild(rowDiv);
		var rowDiv = document.createElement("div");
		rowDiv.style.display="table-row";
		rowDiv.style.float="left";
		//rowDiv.style.lineHeight="1";
		rowDiv.style.paddingTop="0px";
		rowDiv.style.width = "100%";
		rowDiv.innerHTML='<hr>';
		div.appendChild(rowDiv);
	}
	
	but.addEventListener("click", function() {document.body.style.width=bodyWidth; div.parentNode.removeChild(div);}, false);
	document.body.insertBefore(div,document.body.firstChild);
	
	//}
	
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "pageModifier") {
        pageModifier(message.parameter);
    }
});
