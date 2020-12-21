$(function(){
   //자주묻는 질문
    
        /*var sta=false; */   //상태는 시작하자마자 안보이게 상태 저장
        $('.q').click(function(){
        $('.a').hide();
        $(this).next('.a').slideDown();
        $('.icon').removeClass('ro');
        $(this).siblings('.icon').addClass('ro');
        
    });
              
    });
    