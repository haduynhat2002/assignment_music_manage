// var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
// var REGISTER_API_URL = '/_api/v2/member';
// document.addEventListener('DOMContentLoaded', function () {
//     var btnSubmit = document.forms['register-form']['btn-signup']
//     if (btnSubmit) {
//         btnSubmit.onclick = function () {
//             var txtfirstName = document.forms['register-form']['firstName'];
//             var txtlastName = document.forms['register-form']['lastName'];
//             var txtEmail = document.forms['register-form']['email'];
//             var txtpassword = document.forms['register-form']['password'];
//             var txtaddress = document.forms['register-form']['address'];
//             var txtphone = document.forms['register-form']['phone'];
//             var txtavatar = document.forms['register-form']['avatar'];
//
//         }
//     }
// })

var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
var REGISTER_API_URL = '/_api/v2/members';

document.addEventListener('DOMContentLoaded', function () {
    var btnRegister = document.forms['register-form']['btn-signup'];

    if (btnRegister) {
        btnRegister.onclick = function () {
            var txtFirstName = document.forms['register-form']['firstName'];
            var txtLastName = document.forms['register-form']['lastName'];
            var txtEmail = document.forms['register-form']['email'];
            var pwdPassword = document.forms['register-form']['password'];
            var txtPhone = document.forms['register-form']['phone'];
            var txtAddress = document.forms['register-form']['address'];
            var txtAvatar = document.forms['register-form']['avatar'];
            var txtYear = document.forms['register-form']['nam'];
            var txtMonth = document.forms['register-form']['thang'];
            var txtDay = document.forms['register-form']['ngay'];
            var rdoGender = document.forms['register-form']['gender'];
            var birthDay = txtYear.value + "-" + txtMonth.value + "-" + txtDay.value;

            var registerDataObj = {
                'firstName': txtFirstName.value,
                'lastName': txtLastName.value,
                'password': pwdPassword.value,
                'address': txtAddress.value,
                'phone': txtPhone.value,
                'avatar': txtAvatar.value,
                'gender': rdoGender.value,
                'email': txtEmail.value,
                'birthday': birthDay,
            }
            var registerDataJson = JSON.stringify(registerDataObj);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', API_DOMAIN + REGISTER_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    // var responseData = JSON.parse(this.responseText);
                    alert("Dang ky thanh cong!");
                    window.location = "dang-nhap.html";
                } else {
                    alert("Dang ky khong thanh cong!");
                }
            }

            xhr.open('POST', API_DOMAIN + REGISTER_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.send(registerDataJson);
        }
    }
})