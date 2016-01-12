chrome.contextMenus.create ({
    title:"Related News", contexts:["selection"], onclick: function(OnClickData, tab) {
    
	   //var imageUrl = OnClickData.srcUrl;
	   var tabUrl = tab.url;
	   var pageUrl = OnClickData.pageUrl;
	   var source = pageUrl.match(/:\/\/(www\.)?(.[^/:]+)/)[2];
	   source = "www."+source;
	   var selText = OnClickData.selectionText;
	   chrome.tabs.query({
        "active": true,
        "currentWindow": true
		}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "pageModifier",
			"parameter":selText
			});
		});
	   //alert(selText); 
    }           
});

function log(text) {
	alert(text);
}
