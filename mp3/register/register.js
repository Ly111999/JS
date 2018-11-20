var REGISTER_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members';
$(document).ready(function () {
    var validator_register = $('#register-form').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            lastName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            email: {
                required: true,
                email: true
            },
            confirmPassword: {
                required: true,
                minlength: 8,
                maxlength: 15,
                equalTo: '[name="password"]'
            },
            address: {
                required: true
            },
            phone: {
                required: true
            },
            avatar: {
                required: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 15
            },

        },
        messages: {
            firstName: {
                required: 'Vui lòng nhập tên của bạn.',
                minlength: 'Tên quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Tên quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            lastName: {
                required: 'Vui lòng nhập họ của bạn.',
                minlength: 'Họ quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Họ quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            email: {
                required: 'Vui lòng email của bạn.',
                email: 'Vui lòng nhập email đúng định dạng'
            },
            password: {
                required: 'Vui lòng nhập password.',
                minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
            },
            confirmPassword: {
                required: 'Vui lòng nhập password.',
                minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
                maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
                equalTo: 'Password và confirm không giống nhau.',
            },
            address: {
                required: 'Vui long nhap dia chi'
            },
            phone: {
                required: 'Vui long nhap sdt'
            },
            avatar: {
                required: 'Vui long nhap url anh'
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var senderObj = {
                firstName: $(form["firstName"]).val(),
                lastName: $(form["lastName"]).val(),
                password: $(form["password"]).val(),
                address: $(form["address"]).val(),
                phone: $(form["phone"]).val(),
                gender: $(form["gender"]).val(),
                email: $(form["email"]).val(),
                avatar: $(form["avatar"]).val(),
                birthday: formatDate($(form["birthday"]).val())
            };
            $.ajax({
                url: REGISTER_API,
                type: 'POST',
                data: JSON.stringify(senderObj),
                contentType: "application/json; charset=utf-8",
                success: function (data, textStatus, jqXHR) {
                    alert("success");
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
                        validator_register.showErrors(jqXHR.responseJSON.error);

                    }
                }
            });
            return false;
        }
    });

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate()),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
});
// var LOGIN_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication';
//
// var btnSubmit = document.forms['form-register']['btn-submit'];
// if (btnSubmit != null) {
//     btnSubmit.onclick = function () {
//         var txtFirstName = document.forms['form-register']['firstName'];
//         var txtLastName = document.forms['form-register']['lastName'];
//         var pwdPassword = document.forms['form-register']['password'];
//         var txtAddress = document.forms['form-register']['address'];
//         var txtPhone = document.forms['form-register']['phone'];
//         var txtAvatar = document.forms['form-register']['avatar'];
//         var rGender = document.querySelector('input[name="gender"]:checked').value;
//         var txtEmail = document.forms['form-register']['email'];
//         var txtBirthday = document.forms['form-register']['birthday'];
//         var dateFormat = new Date(txtBirthday.value);
//         var dateBirth = dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + (dateFormat.getDate() < 10 ? '0' + dateFormat.getDate() : dateFormat.getDate());
//
//         if (txtFirstName != null && txtLastName != null) {
//             var firstName = txtFirstName.value;
//             var lastName = txtLastName.value;
//             var passWord = pwdPassword.value;
//             var address = txtAddress.value;
//             var phone = txtPhone.value;
//             var avatar = txtAvatar.value;
//             var gender = rGender;
//             var email = txtEmail.value;
//             var birth = dateBirth;
//
//             var jsMember = {
//                 firstName: firstName,
//                 lastName: lastName,
//                 password: passWord,
//                 address: address,
//                 phone: phone,
//                 avatar: avatar,
//                 gender: gender,
//                 email: email,
//                 birth: birth,
//             }
//             var jsonData = JSON.stringify(jsMember);
//             postRegisterDate(jsonData);
//         }
//     }
// }
//
// function postRegisterDate(jsonData) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var member = JSON.parse(xhttp.responseText);
//         }
//     }
//     xhttp.open('POST', REGISTER_API, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(jsonData);
// }



