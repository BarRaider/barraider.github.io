$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   var pname = urlParams.get('name');
   var asset = urlParams.get('asset');
   $("#pluginName").html(pname);
   $("#pluginStore").src = "https://marketplace.elgato.com/product/" + asset;
});