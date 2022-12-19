const copyBtn = document.querySelector(".copy_btn");
const facebookShare = document.querySelector(".facebook_share");

$(function () {
  /*내 url*/
  let url = window.location.href;
  let img = $(".result_img img").attr("src");

  $("meta[property='og\\:url']").attr("content", url);
  $("meta[property='og\\:image']").attr("content", img);
});

/*
* input이라는 창을 임시로 만들고
url을 가져옴
body에 append해서 tmp를 붙여넣고
거기에 url 넣음
복사해놓고
지움
*/
function copyUrl() {
  let tmp = document.createElement("input");
  let url = location.href;

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);

  alert("URL이 복사되었습니다.");
}

function sharefacebook() {
  let url = window.location.href;
  let facebook = "http://www.facebook.com/sharer/sharer.php?u=";
  let link = facebook + url;
  window.open(link);
}

copyBtn.addEventListener("click", copyUrl);
facebookShare.addEventListener("click", sharefacebook);
