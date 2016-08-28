var timer = window.setInterval(logoutfromFB, 500000);

function Validate(object){
	if(typeof object === 'undefined')
	{
		return true;
	}
	return false;
}

function logoutfromFB(){
    //this opens the main logout menu
	var openLogoutMenu = document.getElementById("userNavigationLabel");
	if(!Validate(openLogoutMenu))
		openLogoutMenu.click();

	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	/* I am using mutation observer as using it in chrome only we can listen web and mozzila mutaion observer as well. */
	var observer = new MutationObserver(function(mutations){
		//_w0d - logout button form class of facebook
		var logoutFormClass = document.getElementsByClassName("_w0d")[0];
		if(!Validate(logoutFormClass))
		{
			alert("Time is up. You will be logged out");
			observer.disconnect();
			logoutFormClass.submit();
		}
	});

	observer.observe(document, {
		attributes: true,
		childList: true,
		subtree: true
	});

	clearTimeout(timer);
}