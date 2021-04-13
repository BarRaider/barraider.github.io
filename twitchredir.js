$().ready(function() {
   var urlParams = document.location.hash.replace('#','').split('&');
   urlParams.forEach(function(element) {
      var keyvalue = element.split('=');
      if (keyvalue.length == 2 && keyvalue[0] == 'access_token') {
	     window.location.href = "http://localhost:4201/?access_token=" + keyvalue[1];
		 return;
	  }
   });
   setTimeout(function() { 
		$("#approvalCode").html("Something went wrong! Try restarting the Stream Deck or head to our <a href='https://buz.bz/d'>Discord</a> for support");
   }, 7000);
});