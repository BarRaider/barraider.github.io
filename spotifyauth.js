$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   var codeParam = urlParams.get('code');
   $("#approvalCode").html(codeParam);
});