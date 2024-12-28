$().ready(function() {
   var urlParams = new URLSearchParams(window.location.search);
   var pname = urlParams.get('name');
   var asset = "https://marketplace.elgato.com/product/" + urlParams.get('asset');
   $("#pluginName").html(pname);
   //$("#pluginStore").attr('src', asset);
   $("#storeLink").attr('href', asset);
});