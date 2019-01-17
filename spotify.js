$().ready(function() {
   $("#applicationCode").html("Text added by jQuery code.");
   var urlParams = new URLSearchParams(window.location.search);
   var codeParam = urlParams.get('code');
   $("#applicationCode").html(codeParam);
});