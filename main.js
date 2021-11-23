if(!(window.location.pathname == "/" || window.location.pathname.startsWith("/hledej"))){
    document.body.outerHTML = document.body.outerHTML;
    var url = getSource();
    var title = getTitle();
    var player = document.body;
    var newPlayer = document.createElement("video");
   
    document.body.innerHTML = "";
    document.head.innerHTML = "";
    document.body.style = "background-color: rgb(0, 0, 0); position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow: auto;";
    document.onclick = null;
    document.onkeydown = null;
    document.title = title;
    newPlayer.style= "height: 100%; width: 100%; display: block; margin: auto; controls: true;";
    newPlayer.controls = true;
    newPlayer.src = url;
    player.appendChild(newPlayer);
}

function getSource(){
    var sourceScript = document.scripts[11];
    var url = sourceScript.textContent.split("\"")[1];
    if(localStorage.getItem(window.location.pathname) != null){
        url = localStorage.getItem(window.location.pathname);
    }
    else{
       localStorage.setItem(window.location.pathname,url);
    }
    return url;
}
function getTitle(){
    return document.title.split(" - ")[0]; 
}

