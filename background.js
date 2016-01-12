// this is the background page. It will keep executing at every instant in the background

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {file: 'browserActionCode.js'});
});

/*

// In case, if we have to inject code into the DOM tree of the page, then create a file by name "contxt.js" and write the code there.
// The below API will inject the code in contxt.js into the DOM tree of the page.
chrome.contextMenus.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {file: 'contxt.js'});
});
*/