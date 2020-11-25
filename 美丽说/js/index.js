window.onload = function() {
    // 中部导航栏js定位部分开始
    var arrow_back = document.querySelector('.sidebar p');
    var middleNav = document.querySelector('.middle-nav');
    var n = middleNav.offsetTop;
    window.addEventListener('scroll', function() {
            var topY = window.pageYOffset;
            if (topY <= n) {
                middleNav.removeAttribute('style');
                // console.log(middleNav.offsetTop);	
            } else {
                middleNav.style.position = 'fixed'
            }
            if (topY > 0) {
                arrow_back.style.display = 'block';

            } else {

                arrow_back.removeAttribute('style');
            }


        })
        // 中部导航栏js定位部分开始

    //  放回顶部箭头js部分开始 
    if (window.pageYOffset > n) {
        middleNav.style.position = 'fixed';
    }
    if (window.pageYOffset > 0) {
        arrow_back.style.display = 'block';
    }
    arrow_back.addEventListener('click', function() {
        animated_scroll(window, 0);
    })

    // 放回顶部箭头js部分开始
    //    搜索栏上面部分js部分开始 

    var spanColor = document.querySelectorAll('.search .search-top span');
    for (var sp = 0; sp < spanColor.length; sp++) {
        spanColor[sp].onclick = function() {
            for (var spc = 0; spc < spanColor.length; spc++) {
                spanColor[spc].style.background = '';
                spanColor[spc].style.color = '#666666'
            }
            this.style.background = '#ff3366';
            this.style.color = 'white'

        }
    }
    //    搜索栏上面部分js部分结束

    //  轮播图部分js开始 
    var slideshow = document.querySelector('.slideshow');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var slideshow_photo = document.querySelector('.slideshow-photo')
    var lis = document.querySelectorAll('.slideshow-photo li');
    var body_one = document.querySelector('.body-one')
    var dot_lis = document.querySelectorAll('.slideshow-dot li');
    // 克隆第一个添加到最后
    var frist = lis[0].cloneNode(true);
    slideshow_photo.appendChild(frist);

    slideshow_photo.style.width = slideshow_photo.children.length * 100 + '%';
    // 鼠标移入箭头显示与消失
    slideshow.addEventListener('mouseover', function() {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    slideshow.addEventListener('mouseout', function() {
            prev.style.display = 'none';
            next.style.display = 'none';
            if (timer == null) {
                timer = setInterval(function() {
                    next.click();
                }, 3000)
            }

        })
        // 点击箭头换图

    var i = 0;
    var flag = true;
    var dot_i = 0;
    next.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (i == slideshow_photo.children.length - 1) {
                slideshow_photo.style.left = 0;
                i = 0;

            }
            i++;
            animated(slideshow_photo, -body_one.offsetWidth * i, function() {
                flag = true;
            })
            dot_i++;
            if (dot_i == dot_lis.length) {
                dot_i = 0;
            }
            docChange();
        }


    })
    prev.addEventListener('click', function() {
            if (flag) {
                flag = false;
                if (i == 0) {
                    slideshow_photo.style.left = -body_one.offsetWidth * (slideshow_photo.children.length - 1) + 'px';
                    i = slideshow_photo.children.length - 1;
                }
                i--;
                animated(slideshow_photo, -body_one.offsetWidth * i, function() {
                    flag = true;
                })
                dot_i--;
                if (dot_i < 0) {
                    dot_i = dot_lis.length - 1;
                }
                docChange();
            }

        })
        // 点击小圆点
    for (var dot = 0; dot < dot_lis.length; dot++) {
        dot_lis[dot].setAttribute('date-index', dot);
        dot_lis[dot].addEventListener('click', function() {
            for (var dotc = 0; dotc < dot_lis.length; dotc++) {
                dot_lis[dotc].removeAttribute('class');
            }
            this.className = 'dot';
            var index_dot = this.getAttribute('date-index')
            i = index_dot;
            dot_i = index_dot;
            animated(slideshow_photo, -body_one.offsetWidth * index_dot)

        })
    }

    function docChange() {
        for (var dot = 0; dot < dot_lis.length; dot++) {
            for (var dotc = 0; dotc < dot_lis.length; dotc++) {
                dot_lis[dotc].removeAttribute('class');
            }
            dot_lis[dot_i].className = 'dot';
        }
    }

    // 自动播放
    var timer = setInterval(function() {
            next.click();
        }, 3000)
        //  轮播图部分js结束

}