var LOGIN_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication";
var validator_login = $('#login-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 15
        }
    },
    messages: {
        email: {
            required: 'Vui long nhap email cua ban',
            email: 'Vui long nhap dung dinh dang'
        },
        password: {
            required: 'Vui long nhap password',
            minlength: 'Nhap qua ngan. toi thieu {0}',
            maxlength: 'Nhap qua do dai cho phep. toi thieu {0}'
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderLog = {
            email: $(form["email"]).val(),
            password: $(form["password"]).val()
        };
        $.ajax({
            url: LOGIN_API,
            type: 'POST',
            data: JSON.stringify(senderLog),
            contentType: "application/json; charset=utf-8",
            success: function (data, textStatus, jqXHR) {

                alert("success");
                alert(data.token);
                localStorage.setItem('token', data.token);
                console.log('success');
                console.log(data);
                console.log('-----');
                console.log(data.responseText);
                console.log('-----');
                console.log(textStatus);
                console.log('-----');
                console.log(jqXHR);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("error");
                if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                    validator_login.showErrors(jqXHR.responseJSON.error);
                }
            }
        });
        return false;
    }
});
// var btnLogin = document.forms["form-login"]["btn-login"];
// if (btnLogin != null) {
//     btnLogin.onclick = function () {
//
//         var txtEmail = document.forms["form-login"]["email"];
//         var pwdPassword = document.forms["form-login"]["password"];
//         var jsMember = {
//             email: txtEmail.value,
//             password: pwdPassword.value,
//         }
//         var jsData = JSON.stringify(jsMember);
//         postLoginData(jsData);
//     }
// }
//
// function postLoginData(jsData) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var member = JSON.parse(xhttp.responseText);
//             localStorage.setItem('token', member.token);
//         }
//     }
//     xhttp.open("POST", LOGIN_API, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//         xhttp.send(jsData);
// }




