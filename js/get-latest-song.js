var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
var LATEST_API_URL = '/_api/v2/songs';
document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_DOMAIN + LATEST_API_URL, false);
    xhr.setRequestHeader('Authorization', token);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var responseJsonObject = JSON.parse(this.responseText);
            var html = '';
            var index;
            var limited = 10;
            if (responseJsonObject.length < limited) {
                limited = responseJsonObject.length;
            }
            if (responseJsonObject.length > 0) {
                for (index = 0; index < limited; index++) {
                    html += '<div class="dong2">';
                    html += '<div class="bai-hat">';
                    html += '<div class="thu-tu">' + (index + 1) + '</div>';
                    html += '<div class="avatar" id="thumbnail"><img src=" ' + responseJsonObject[index].thumbnail + '"></div>';
                    html += '<div class="thong-tin-bai-hat">';
                    html += ' <div class="ten-bai-hat">Bài hát: ' + responseJsonObject[index].name + '</div>';
                    html += '<div class="ten-ca-si">Ca sĩ: ' + responseJsonObject[index].singer + '</div>';
                    html += '<div class="tac-gia">Tác Giả: ' + responseJsonObject[index].author + '</div></div>';
                    html += '<audio class="audio" controls><source src="' + responseJsonObject[index].link;
                    html += 'type="audio/ogg">Your browser does not support the audio element.</audio></div>';
                    html += '</div>';
                    html += '</div>';
                }
                document.getElementById("songs").innerHTML = html;
            }
        } else {
            alert('Không lấy được bài hát mới nhất!')
        }
    }
    xhr.send();
})