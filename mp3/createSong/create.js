var CREATE_SONG_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs";

$(document).ready(function () {
    var validator = $('#create-song').validate({
        rules: {
            name: {
                required: true
            },
            thumbnail: {
                required: true
            },
            description: {
                required: true
            },
            singer: {
                required: true
            },
            author: {
                required: true
            },
            link: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Khong bo trong truong nay"
            },
            thumbnail: {
                required: "Khong bo trong truong nay"
            },
            description: {
                required: "Khong bo trong truong nay"
            },
            singer: {
                required: "Khong bo trong truong nay"
            },
            author: {
                required: "Khong bo trong truong nay"
            },
            link: {
                required: "Khong bo trong truong nay"
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var senderObj = {
                name: $(form["name"]).val(),
                thumbnail: $(form["thumbnail"]).val(),
                description: $(form["description"]).val(),
                singer: $(form["singer"]).val(),
                author: $(form["author"]).val(),
                link: $(form["link"]).val()
            };
            $.ajax({
                url: CREATE_SONG_API,
                type: 'POST',
                data: JSON.stringify(senderObj),
                contentType: "application/json; charset=utf-8",
                beforeSend: function(res){
                    res.setRequestHeader('Authorization','Basic ' + localStorage.getItem('token'));
                },
                success: function (data) {
                    alert("success");
                    console.log(data);

                },
                error: function (jqXHR) {
                    alert("error");
                    if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                        validator.showErrors(jqXHR.responseJSON.error);

                    }
                }
            });
            return false;
        }
    })
})
// var btnCreate = document.forms["form-create-song"]["btn-submit"];
// if (btnCreate != null){
//     btnCreate.onclick = function () {
//         var txtName = document.forms["form-create-song"]["name"];
//         var txtThumbnail = document.forms["form-create-song"]["thumbnail"];
//         var txtDescription = document.forms["form-create-song"]["description"];
//         var txtSinger = document.forms["form-create-song"]["singer"];
//         var txtAuthor = document.forms["form-create-song"]["author"];
//         var txtLink = document.forms["form-create-song"]["link"];
//
//         var jsSong = {
//             name : txtName.value,
//             thumbnail : txtThumbnail.value,
//             description : txtDescription.value,
//             singer : txtSinger.value,
//             author : txtAuthor.value,
//             link : txtLink.value
//         }
//         var jsDataSong = JSON.stringify(jsSong);
//         doCreateSong(jsDataSong);
//     }
// }
//
// function doCreateSong(JsDataSong) {
//     var xHttp = new XMLHttpRequest();
//     xHttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201){
//             var song = JSON.parse(xHttp.responseText);
//             alert("Success");
//         }
//     }
//     xHttp.open("POST", CREATE_SONG_API, true);
//     xHttp.setRequestHeader("Content-type", "application/json");
//     xHttp.setRequestHeader('Authorization','Basic ' + localStorage.getItem('token'));
//     xHttp.send(JsDataSong);
// }