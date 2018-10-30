var MP3_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var objSong = JSON.parse(xhttp.responseText);
        console.log(xhttp.responseText);
        var content = '';
        for (var i = 0; i < objSong.length; i++) {
            var itemSong = ' <div class="mp3-item" style="display: block">\n' +
                '        <div>'+ (i+1) +'</div>\n' +
                '        <img onclick="GetSong(\'' + objSong[i].link +'\')" width="100px" height="70px" src="'+ objSong[i].thumbnail+'" alt="">\n' +
                '        <div>' + objSong[i].name + '</div>\n' +
                '        <div>' + objSong[i].singer + '</div>\n' +
                '    </div>';
            content += itemSong;
        }
        document.getElementById('mp3').innerHTML = content;
    }
};

xhttp.open("GET", MP3_API, true);
xhttp.send();

function GetSong(srcSong) {
    var play = document.getElementById('play');
    var link = document.getElementById('src-song');
    link.src = srcSong;
    play.play();
}