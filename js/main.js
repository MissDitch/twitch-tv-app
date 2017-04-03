/* Instead of using Twitch's API, FCC recommends hard-coding a JSON into the app as a variable. 
It is a series of responses for different accounts from Twitch. */

var data = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  { 
    "display_name": "comster404",
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'comster404' does not exist"
  }
]

//initialize
function init() {
  var all = document.getElementById("all");
  var online = document.getElementById("online");
  var offline = document.getElementById("offline");

  all.addEventListener("click", showTab, false);
  /* I wanted to pass an argument to the addEventListener function
  http://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function
   the second answer provides the right solution: 
   Get the argument from the event target attribute?
  */
  online.addEventListener("click", showTab, false);
  // here I add an attribute to the event's target, it's value is equal to the argument
  online.param = "online";
  offline.addEventListener("click", showTab, false);
  // same here
  offline.param = "offline";

  showStreams(data);
}

//tabbed list display
function showTab(e) {
  var i, list, listItems,streamers, tablinks, listEl;
  list = document.getElementById("streamers");
  listItems = document.querySelectorAll("li.streamer");
  streamers = document.querySelectorAll("li.streamer > div");   

  list.innerHTML = "";

  for (i = 0; i < streamers.length; i++) {
    listEl = streamers[i].parentElement;
    
    if (e.target.hasOwnProperty("param")) {
      // get argument:
      var param = e.target.param;
      listEl.style.display = "none";
      if (streamers[i].className === param) {        
        listEl.style.display = "block";
      } else {
          listEl.style.display = "none";
      }          
    }
    else {
      /* remove the inline styles, so 'display' goes back to what was defined in css
      http://stackoverflow.com/questions/21457904/change-element-display-none-back-to-default-style-value-js
       */
      streamers[i].parentElement.style.removeProperty("display") ;  
    }   
    append(list, listItems[i]); 
  }

  tablinks = document.getElementsByClassName("tablink");
  
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" twitch-purple", "");
  } 
  e.target.className += " twitch-purple";
}

//helper functions
function createNode(element) {
  return document.createElement(element);
}

function createText(string) {
  return document.createTextNode(string);
}

function append(parent, el) {
  return parent.appendChild(el);
}

//create individual listitem for streams list
 function createListItem(className,imageSource, name, message, url) {
    var listItem = createNode("li");
    listItem.setAttribute("class", "streamer");
   
    var div = createNode("div");
    div.setAttribute("class", className);
    var image = createNode("img");
    image.setAttribute("id", name );
    image.setAttribute("src", imageSource);    
    append(div, image); 

    var a = createNode("a");
    a.setAttribute("href", url);
    if (url === "#") {
        a.setAttribute("class", "inactiveLink");
    }
    else {        
        a.setAttribute("target", "_blank");
    }    
    var text = createText(name);
    append(a, text);
    append(div, a);

    var p = createNode("p");
    text = createText(message);
    append(p, text);
    append(div, p);
    append(listItem, div);
 
    return listItem;
}

//show streams list
function showStreams(data) {
    var results = document.getElementsByClassName("results");
    var streamers = document.getElementById('streamers');
    var length = data.length;
    
    if (length === 0) {
        streamers.innerHTML = "Sorry, no streamers";
    }
    else {        
      for (var i = 0; i < length; i++) {  
        var className = ""; 
        var imageSource = "http://placehold.it/40x40";
        var name = "";
        var message = "";
        var url = "";  
        var streamer = null;  
   
        if (data[i].hasOwnProperty("stream") && data[i].stream !== null ) {
          var stream = data[i].stream;
          className = "online"; 
          name = stream.display_name;       
          imageSource = stream.logo;  
          message = stream.status;             
          url = stream.url;

          streamer = createListItem(className,imageSource, name, message, url);  
          append(streamers, streamer);   
        }

        else if (data[i].hasOwnProperty("stream") && data[i].stream === null ) {
          className = "offline";          
          name = data[i].display_name;   
          message = "Offline";  
          url = "https://www.twitch.tv/" + name;    
      
          streamer = createListItem(className, imageSource, name, message, url);                 
          append(streamers, streamer);  

          //there is no logo attribute if stream is null, so logo has to be fetched
          getLogo(name);      
        }
    
        else if ( data[i].hasOwnProperty("error")){
          className = "error";       
          imageSource = "http://placehold.it/40x40";
          name = data[i].display_name;      
          message = data[i].message;
          url = "#";

          streamer = createListItem(className, imageSource, name, message, url);  
          append(streamers, streamer); 
        } 
      }     
    }    
}

/* 
Replace the Twitch API base URL https://api.twitch.tv/kraken with 
https://wind-bow.gomix.me/twitch-api. Use this endpoint according to the Twitch API documentation.

NOTE:
This server caches data to lower the request rate. To prevent abuses this server accepts 
GET requests only, and serves only routes /users/:user, /channels/:channel, 
and /streams/:stream. These are more than enough to complete the challenge.
*/

// fetch logo if streamer is offline (stream is null)
function getLogo(name) {
  imageUrl = "https://wind-bow.gomix.me/twitch-api/channels/" + name.toLowerCase(); 

  // https://blog.garstasio.com/you-dont-need-jquery/ajax/
  window.myJsonpCallback = function (data) {
    var image = document.getElementById(data.display_name);
    image.setAttribute("src", data.logo);
  } 

  imageUrl += "?callback=myJsonpCallback";

  var scriptEl = document.createElement('script');
  scriptEl.setAttribute("src", imageUrl); 
  document.body.appendChild(scriptEl);
}

init();