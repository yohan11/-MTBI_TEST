function scrollUp() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) - 1) * vheight,
    },
    500
  );
}
/**
 * animate의 scrollTop은 그 위치로 스크롤 하라는 것, 두번째 파라미터는 duration , 페이지에 맞는 수($(window).scrollTop()/vheight)-1) 에 height 값을 곱함
 */

function scrollDown() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
    },
    500
  );
}

/**
 * 각 버튼을 눌렀을 때, 새로고침을 했을때(html, body) 어떤 동작을 수행할 것인지
 */
$(function () {
  $(".next_btn").click(function (e) {
    /*
     * 유효성검사, 다음 버튼의 부모 태그의 이전 태그(설문항목)의 항목들이 체크 되었는지
     */
    let divs = $(this).parent().prev().children();
    let inputs = divs.find("input:checked");
    if (inputs.length < 1) {
      alert("문항이 선택되지 않았습니다.");
      return false;
    }
    /*
     * 버튼을 눌렀을때의 기본 동작을 막고 스크롤다운함
     */
    e.preventDefault();
    scrollDown();
  });
  $(".prev_btn").click(function (e) {
    e.preventDefault();
    scrollDown();
  });
  $("#form").submit(function (e) {
    let radios = $("input[type=radio]:checked");
    if (radios.length < 3) {
      alert("문항이 선택되지 않았습니다.");
      return false;
    }
    return true;
  });
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
});
