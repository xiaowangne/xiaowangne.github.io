    $(function () {
        function upLi(index) {
            $('.erji-nav-section').addClass('active')
            $('.erji-nav-section').find(".erji-nav").eq(index).addClass('active').css({ "display": "block", "opacity": "0" }).siblings().removeClass('active').css({ "display": "none" })
            $('.erji-nav-section').find(".erji-nav").eq(index).animate({ "padding-top": 0, "opacity": "1" }, 500).siblings().css({ "padding-top": "10px", "opacity": "0" });
        }
        function outLi() {
            $('.web-nav').removeClass('active')
            $('.erji-nav-section').find(".erji-nav").removeClass('active').stop().animate({ "padding-top": "10px", "opacity": "0" }, 10, function () {
                $('.erji-nav-section').find(".erji-nav").css({ "display": "none" });
                $('.erji-nav-section').removeClass('active').removeClass('active2')
            });
            $("#header").removeClass("active2")
            $('.nav-list li.active').removeClass('active')

        }
        function outlia(v) {
            // $('.nav-list li.active').removeClass('active')
            if (v != 1) {
                $(".erji-nav1").stop().animate({ "padding-top": "10px", "opacity": "0" }, 10, function () {
                    $(".erji-nav1").css({ "display": "none" });
                });
            }
            if (v != 2) {
                $(".erji-nav2").stop().animate({ "padding-top": "10px", "opacity": "0" }, 10, function () {
                    $(".erji-nav2").css({ "display": "none" });
                });
            }
            if (v != 3) {
                $(".erji-nav3").stop().animate({ "padding-top": "10px", "opacity": "0" }, 10, function () {
                    $(".erji-nav3").css({ "display": "none" });
                });
            }
            if (v != 4) {
                $(".erji-nav4").stop().animate({ "padding-top": "10px", "opacity": "0" }, 10, function () {
                    $(".erji-nav4").css({ "display": "none" });
                });
                
            }
        }


        function isScroll() {
            var header = $("#header");
            let navSidebar = $(".erji-nav-section");

            if ($(window).scrollTop() > 50) {
                header.addClass("active")
                $('.nav-list').addClass('active')
            } else {
                header.removeClass("active");
                $('.nav-list').removeClass('active')
            }
            var scrolled = 0, t = 0;
            $(window).scroll(function (e) {
                scrolled = $(this).scrollTop();
                // 向下滚
                if (scrolled > 50) {
                    header.addClass("active")
                    $('.nav-list').addClass('active')
                } else {
                    header.removeClass("active")
                    $('.nav-list').removeClass('active')
                }
                setTimeout(function () {
                    t = scrolled;
                }, 0);
            });
        }
        isScroll()

        $('.nav-list  .lia1').hover(function () {
            if ($("#header").is(".active")) {
                $("#header").addClass("active2")
                $('.erji-nav-section').addClass('active2')
            } else {
                $("#header").removeClass("active2")
                $('.erji-nav-section').removeClass('active2')
            }
            $(this).addClass('active').siblings().removeClass('active')
            $('.web-nav').addClass('active')
            $('.erji-nav-section').addClass('active')
            $(".erji-nav1").css({ "display": "block" }).stop().animate({ "padding-top": "0px", "opacity": "1" }, 500)
            outlia(1)
        });
        $('.nav-list  .lia2').hover(function () {
            if ($("#header").is(".active")) {
                $("#header").addClass("active2")
                $('.erji-nav-section').addClass('active2')
            } else {
                $("#header").removeClass("active2")
                $('.erji-nav-section').removeClass('active2')
            }
            $(this).addClass('active').siblings().removeClass('active')
            $('.web-nav').addClass('active')
            $('.erji-nav-section').addClass('active')

            $(".erji-nav2").css({ "display": "block" }).stop().animate({ "padding-top": "0px", "opacity": "1" }, 500)
            outlia(2)
        });
        $('.nav-list  .lia3').hover(function () {
            if ($("#header").is(".active")) {
                $("#header").addClass("active2")
                $('.erji-nav-section').addClass('active2')
            } else {
                $("#header").removeClass("active2")
                $('.erji-nav-section').removeClass('active2')
            }
            $(this).addClass('active').siblings().removeClass('active')
            $('.web-nav').addClass('active')
            $('.erji-nav-section').addClass('active')
            $(".erji-nav3").css({ "display": "block" }).stop().animate({ "padding-top": "0px", "opacity": "1" }, 500)
            outlia(3)
        });
        $('.nav-list  .lia4').hover(function () {
            if ($("#header").is(".active")) {
                $("#header").addClass("active2")
                $('.erji-nav-section').addClass('active2')
            } else {
                $("#header").removeClass("active2")
                $('.erji-nav-section').removeClass('active2')
            }
            $(this).addClass('active').siblings().removeClass('active')
            $('.web-nav').addClass('active')
            $('.erji-nav-section').addClass('active')
            $(".erji-nav4").css({ "display": "block" }).stop().animate({ "padding-top": "0px", "opacity": "1" }, 500)
            outlia(4)
        });
        $('.nav-list  .li').hover(function () {
            outLi()
        });
        $(' .nav-logo').hover(function () {
            outLi()
        });


        $('#header').hover(function (e) {
        }, function (e) {
            outLi()
        })

        $('.lang').hover(function (e) {
            $(this).addClass('active')
        }, function (e) {
            $(this).removeClass('active')
        })
        $('.lang span').click(function () {
            $('.lang .select').html($(this).text())
            $(this).removeClass('active')
        })

        $('.search-open').click(function () {
            $('.search-section').show()
            $('.body').css({ "overflow": 'hidden' })
        })
        $('.search-close').click(function () {
            $('.search-section').hide()
            $('.body').css({ "overflow": 'auto' })
        })
        $('.search-close').click(function () {
            $('.search-section').hide()
            $('.body').css({ "overflow": 'auto' })
        })

        //指定区域外点击事件
        $('.search-section').bind("click", function (e) {
            var target = $(e.target);
            if (target.closest(".search-box").length == 0) { //点击id之外的地方触发
                $('.search-section').hide()
                $('.body').css({ "overflow": 'auto' })
            }
        })
       function m_close(){
            $(".menu").removeClass('click');
                $('body').css("overflow", "auto")
                $(".m-web-nav").removeClass("active");
                $('.menu-list').removeClass("active")
                setTimeout(() => {
                    $(".m-menu-section").removeClass("active")
                }, 200);
       }
        $('.menu').click(function () {
            if ($(this).hasClass('click')) {
                m_close()
            } else {
                $(this).addClass('click');
                $('body').css("overflow", "hidden")
                $(".m-menu-section").addClass("active");
                $("#header").addClass("active");
                $(".m-web-nav").addClass("active");
                setTimeout(() => {
                    $('.menu-list').addClass("active")
                }, 0);
            }

        });
        // $('.m-menu-section .nav-list .lia').click(function () {
        //     console.log($(this).siblings())
        //     $(this).siblings().css({ 'display': 'flex' })
        // })
        $(".m-menu-section .nav-list .lia").on("click", function (){
            if ($(this).siblings().is(".erji-list")) {
                if ($(this).parent().is(".active1")) {
                    $(this).siblings(".erji-list").stop(true, false).slideUp();
                    $(this).parent().removeClass("active1")
                } else {
                    $('.m-menu-section .nav-list .lia').siblings(".erji-list").stop(true, false).slideUp();
                    $(this).siblings(".erji-list").stop(true, false).slideDown().css({ 'display': 'flex' });
                    $(this).parent().addClass("active1").siblings().removeClass("active1")
                }
            }


        })

        $('.m-menu-section').bind("click", function (e) {
            var target = $(e.target);
            if (target.closest(".nav-list").length == 0) { //点击id之外的地方触发
                m_close()
            }
        })
        $(window).resize(function () {
            //执行代码块
            if (window.innerWidth < 1023.98) {
                return false;
            } else {
                m_close()
                return false;
            }
        });
    })
