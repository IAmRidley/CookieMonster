document.getElementById("goButton").addEventListener("click", go);

function go() {	
	console.log("You pressed the clear data button");
	
	if (document.getElementById('hist').checked) {
		console.log("You had history checked");
		//clear history
		chrome.browsingData.remove({
			"since": 0
		}, {
			"history": true
		});
		
	}
	
	if (document.getElementById('cookie').checked) {
		console.log("You had cookies checked");
		//clear cookies
		chrome.browsingData.remove({
			"since": 0
		}, {
			"cookies": true
		});
	}
	
	if (document.getElementById('cache').checked) {
		console.log("You had cache checked");
		//clear cache
		chrome.browsingData.remove({
			"since": 0
		}, {
			"cache": true,
			"cacheStorage": true
		});
	}

	window.close()
}