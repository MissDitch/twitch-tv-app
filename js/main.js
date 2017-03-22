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

/* 
Replace the Twitch API base URL https://api.twitch.tv/kraken with 
https://wind-bow.gomix.me/twitch-api. Use this endpoint according to the Twitch API documentation.

NOTE:
This server caches data to lower the request rate. To prevent abuses this server accepts 
GET requests only, and serves only routes /users/:user, /channels/:channel, 
and /streams/:stream. These are more than enough to complete the challenge.
*/

//show streams list
function showStreams(data) {
    var results = document.getElementsByClassName("results");
    //results[0].classList.add("active");
    var streamers = document.getElementById('streamers');
    var length = data.length;

    
    console.log("Data is: " + data);
    if (length === 0) {
        streamers.innerHTML = "Sorry, no streamers";
    }
    else {        
        for (var i = 0; i < length; i++) {  
          var count = 1; 
          
          var imageSource = "http://placehold.it/40x40";
    var name = "";
    var message = "";
    var url = "";  

    var streamer = null;  
   
          if (data[i].hasOwnProperty("stream") && data[i].stream !== null ) {
             var stream = data[i].stream;
            // var id = "div"+ count;
          
            name = stream.display_name;
            var id = "div"+ name;
          
            imageSource = stream.logo;  
            message = stream.status;  
            url = stream.url;
            streamer = createListItem(id,imageSource, name, message, url);  
            console.log(" online: " + name + " " + id);
             streamers.appendChild(streamer); 
            
        
        }
       else if (data[i].hasOwnProperty("stream") && data[i].stream === null ) {
         
         // var id = "div"+ count;
            name = data[i].display_name; 
            var id = "div"+ name;    
             message = "Offline";  
             url = "https://www.twitch.tv/" + name;    
             //   console.log(url);
             streamer = createListItem(id, imageSource, name, message, url); 
                  console.log(" offline: " + name + " " + id);
                
               streamers.appendChild(streamer);  

               getLogo(name, id);

      
    }
    
    else if ( data[i].hasOwnProperty("error")){
        //console.log(data[i]);
       // var id = "div"+ count;
        imageSource = "http://placehold.it/40x40";
        name = data[i].display_name;   
        var id = "div"+ name;    
        message = data[i].message;
        url = "#";
        streamer = createListItem(id, imageSource, name, message, url);  
         console.log("error: " + name + " " + id);
          streamers.appendChild(streamer);                 
    }
    
         count++;             
        }     
    }    
}

function getLogo(name, id) {
   //make ajax call for image 
    imageUrl = "https://wind-bow.gomix.me/twitch-api/channels/" + name.toLowerCase();
  console.log(imageUrl);
  
             $.ajax({
                 url: imageUrl,
                 dataType: "jsonp"
             }).done(function(data){
                 console.log("result of ajax call for image source is: " + data.logo);
                 var image = document.getElementById(id);
                 image.setAttribute("src", data.logo);
          

             }).fail(function(err) {
              //  console.log(err);
             });
             

}

function createMessage (message) {
    var listItem = document.createElement("li");
    var text = document.createTextNode(message);
    listItem.appendChild(text);
     return listItem;
}

function setImageUrl(string) {
    return string;
}

//create individual listitem for streams list
 function createListItem(id, imageSource, name, message, url) {
    var listItem = document.createElement("li");
   
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src", imageSource);
    image.setAttribute("id", id );
    div.appendChild(image);    

    var a = document.createElement("a");
    a.setAttribute("href", url);
    if (url === "#") {
        a.setAttribute("class", "inactiveLink");
    }
    else {        
        a.setAttribute("target", "_blank");
    }
    
    var text = document.createTextNode(name);
    a.appendChild(text);
    div.appendChild(a);

    var p = document.createElement("p");
    text = document.createTextNode(message);
    p.appendChild(text);
    div.appendChild(p);

    listItem.appendChild(div);
 
    return listItem;
}

showStreams(data);
