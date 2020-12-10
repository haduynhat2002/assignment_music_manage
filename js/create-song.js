var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
var ADD_SONG_API_URL = '/_api/v2/members/songs';

document.addEventListener('DOMContentLoaded', function () {
    var btnButton = document.forms['add-songs']['btn-button'];
    if (btnButton) {
        btnButton.onclick = function () {
            var txtName = document.forms['add-songs']['name'];
            var txtSinger = document.forms['add-songs']['singer'];
            var txAuthor = document.forms['add-songs']['author'];
            var txtThumbnail = document.forms['add-songs']['thumbnail'];
            var txtLink = document.forms['add-songs']['link'];
            var registerDataObj = {
                'name':txtName.value,
                'singer':txtSinger.value,
                'author':txAuthor.value,
                'thumbnail':txtThumbnail.value,
                'link':txtLink.value,
            }


            var registerDataJson = JSON.stringify(registerDataObj)
            var xhr = new XMLHttpRequest();
            xhr.open('POST', API_DOMAIN + ADD_SONG_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset-UTF-8');
            xhr.setRequestHeader('Authorization', token);

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status ==201) {
                    alert("Thêm bài hát thành công.");
                    window.location = "get-my-song.html";
                } else {
                    alert("Thêm bài hát không thành công.");
                }
            }
            xhr.send(registerDataJson);
        }
    }
})