$(function () {
    //자주묻는 질문

    var sta = false; //상태는 시작하자마자 안보이게 상태 저장
    $('.q').click(function () {


        if (sta) { //false일때 동작
            $('.a').slideUp();
            $(this).next('.a').slideUp();
            $('.icon').removeClass('ro');
            $(this).siblings('.icon').addClass('ro');
            sta=false;
        } else {  //ture 일때 동작
            $('.a').hide();
            $(this).next('.a').slideDown();
            $('.icon').removeClass('ro');
            $(this).siblings('.icon').addClass('ro');
            sta = true;
        }
    });

});
