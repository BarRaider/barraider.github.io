var settings = {

  // Simply change the name in quotes with your name
  social: {
    
    // Twitch Name
    twitchUsername: "realBarRaider",
    
    // Twitter Name
    twitterUsername: "BarRaider",
    
    // Facebook Name
    facebookUsername: "ChangeThis",
    
    // Instagram Name
    instagramUsername: "ChangeThis",
    
    // Youtube Name
    youtubeUsername: "ChangeThis",
    
    // Tumblr Name
    tumblrUsername: "ChangeThis",
    
    // Paypal Name
    paypalUsername: "ChangeThis",
    
    // Patreon Name
    patreonUsername: "ChangeThis",
    
    // Snapchat Name
    snapchatUsername: "ChangeThis",
    
     // Steam Name
    steamUsername: "ChangeThis",
    
     // Xbox Name
    xboxUsername: "ChangeThis",
    
     // Playstation Network Name
    psnUsername: "ChangeThis",
    
    // Origin Network Name
    originUsername: "ChangeThis",
    
    // Uplay Network Name
    uplayUsername: "ChangeThis",
    
    // Nintendo Network Name
    nintendoUsername: "ChangeThis",
    
    // Battle Net Network Name
    battlenetUsername: "ChangeThis",
    
    // Deviant Art Network Name
    deviantartUsername: "ChangeThis",
   
    // Reddit Network Name
    redditUsername: "ChangeThis",
    
    // Game Wisp Network Name
    gamewispUsername: "ChangeThis",
    
    // Plays.tv Network Name
    playstvUsername: "ChangeThis"
    
  },

  // Gaming Popup Options
  popup: {
    
    // This is where you enable or disable networks
    // 1 means enabled, 0 means disabled
    
    // Enable Twitter
    enableTwitter: 1,
    
    // Enable Facebook
    enableFacebook: 1,
    
    // Enable Instagram
    enableInstagram: 0,
    
    // Enable YouTube
    enableYoutube: 0,
    
    // Enable Tumblr
    enableTumblr: 0,
    
    // Enable Twitch
    enableTwitch: 0,
    
    // Enable PayPal
    enablePaypal: 0,
    
     // Enable Patreon
    enablePatreon: 0,
    
    // Enable Snapchat
    enableSnapchat: 0,
    
    // Enable Steam
    enableSteam: 0,
    
    // Enable Xbox
    enableXbox: 0,
    
    // Enable Playstation Network
    enablePsn: 0,
    
     // Enable Origin Network
    enableOrigin: 0,
    
    // Enable Uplay Network
    enableUplay: 0,
    
    // Enable Nintendo Network
    enableNintendo: 0,
    
    // Enable Battle Net Network
    enableBattleNet: 0,
    
    // Enable Deviant Art Network
    enableDeviantArt: 0,
    
    // Enable Reddit Network
    enableReddit: 1,
    
    // Enable Game Wisp Network
    enableGameWisp: 0,
    
    // Enable Plays TV Network
    enablePlaysTv: 0,
    
    
    //
    // Times to update
    //
    
    // Time each network animation takes in seconds
    aTime: 4,
    
    // The delay for the animation cycle to restart in seconds
    pauseTime: 4
  }
};

// You're all done
//
//
//
//
//
//
//
//
// No need to go any further!

// Load Social Network Names
$( ".popup .right span" ).each(function() {
    var socialName = settings.social[$(this).data('name')];
    $(this).append( socialName );
});

// Load Social Popup
$(".popup").each(function() {
  var supporterEnable = settings.popup[$(this).data('box')],
    boxName = $(this).data('box');

  if (supporterEnable == 1) {
    $('input[name=' + boxName + ']').prop('checked', true);
    $(this).addClass("animate-popup");
  } else if (supporterEnable === 0) {
    $('input[name=' + boxName + ']').prop('checked', false);
    $(this).addClass("no-popup");
  } else {
    return false;
  }
});

// Animate Popup

var popups = $('.animate-popup');
var i = 0;
var pT = settings.popup.pauseTime * 1000;

function animatePopup() {
  if (i >= popups.length) {
    i = 0;
  }
  popups.eq(i).addClass("show-popup")
    .delay(settings.popup.aTime * 1000)
    .queue(function() {
      $(this).removeClass("show-popup");
      $(this).dequeue();
      if (i == popups.length) {
        setTimeout(animatePopup, pT);
      } else {
        animatePopup();
      }
    });
  i++;
}
animatePopup();