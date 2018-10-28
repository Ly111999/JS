var http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsObject = JSON.parse(http.responseText);
        var content = '';
        console.log(http.responseText);
        for (var i = 0; i < jsObject.items.length; i++) {

            var itemContent = '<div class="col-3 tube-item">';
            itemContent += '<img onclick="doSomeThing()" class="myImg" width="300"src="' + jsObject.items[i].snippet.thumbnails.high.url + '"/>';
            itemContent += ' <div class="modal" id="myModel">';
            itemContent += '<span class="close">&times;</span>';
            itemContent += '<iframe id="videoClose" class="modal-content" width="660" height="355" src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen>';
            itemContent += '</iframe>';
            itemContent += '</div>';
            itemContent += '<h3 style="font-size:14px">' + jsObject.items[i].snippet.title + '</h3>';
            itemContent += '</div>';

            content += itemContent;
        }
        document.getElementById("myTubes").innerHTML = content;
        var modal = document.getElementsByClassName('modal');

        var img = document.getElementsByClassName("myImg");
        var modalImg = document.getElementsByClassName("modal-content");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        }

        var vi_close = document.getElementById("videoClose");
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
           myModel.style.display = 'none';
           vi_close.src = "";
        }

        var myModel = document.getElementById('model');
        function doSomeThing() {
            myModel.style.display = 'block';
        }
    }
};

var submit = document.getElementById("btn-submit");
submit.onclick = function () {
    var key = document.getElementById("tim");
    var keyWord = key.value;
    alert(keyWord);
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyWord + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";

    http.open("GET", YOUTUBE_API, true);
    http.send();
};

