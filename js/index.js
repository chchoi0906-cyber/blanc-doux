/* 블랑두 */


window.addEventListener("scroll", function () {
    const banner = document.querySelector(".banner");

    if (window.scrollY === 0) {
        // 맨 위일 때 다시 보여줌
        banner.style.display = "block";
    } else {
        // 스크롤을 조금이라도 내리면 숨김
        banner.style.display = "none";
    }
});


$(document).ready(function () {

    /* 오른쪽 btn */
    $('.btn.next').on('click', function () {
        slideNext();
    });

    /* 왼쪽 btn */
    $('.btn.prev').on('click', function () {
        slidePrev();
    });

    /* 슬라이드 오른쪽 이동 함수 */
    function slideNext() {
        $('.viewer').animate({
            left: '-100%'
        }, 300, function () {
            $(this).append($('.viewer li').first()).css({ left: 0 });
        });

        updatePagerNext(); 
    }

    /* 슬라이드 왼쪽 이동 함수 */
    function slidePrev() {
        $('.viewer').prepend($('.viewer li').last()).css({ left: '-100%' })
            .animate({ left: 0 }, 300);

            updatePagerPrev();
    }

    /* 자동 실행 */
    let autoSlide = setInterval(slideNext, 3000); // 3초마다 slideNext 실행


    function updatePagerNext() {
    const $current = $('.pager li.active');
    let $next = $current.next();

    if ($next.length === 0) {
        $next = $('.pager li').first();
    }

    $current.removeClass('active');
    $next.addClass('active');
}

function updatePagerPrev() {
    const $current = $('.pager li.active');
    let $prev = $current.prev();

    if ($prev.length === 0) {
        $prev = $('.pager li').last();
    }

    $current.removeClass('active');
    $prev.addClass('active');
}

});

