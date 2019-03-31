$().ready(function() {
   var urlParams = document.location.hash.replace('#','').split('&');
   urlParams.forEach(function(element) {
      var keyvalue = element.split('=');
      if (keyvalue.length == 2 && keyvalue[0] == 'access_token') {
	     $("#approvalCode").html(keyvalue[1]);
		 return;
	  }
   });
});