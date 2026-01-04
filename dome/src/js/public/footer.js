  $(document).on('click','.m-follow-us .qrcode_wx', function() {
            layer.open({
                type: 1,
                area: ['200px', '230px'],
                shade: 0.6,
                title: false,
                shadeClose: true, //点击遮罩关闭
                content: `<div class="footer-qrcode">
                        <img src="/src/images/1.png" alt="">
                        <span>微信二维码</span>
                     </div>`
            });
        })
         $(document).on('click','.m-follow-us .qrcode_xcx', function() {
            layer.open({
                type: 1,
                area: ['200px', '230px'],
                shade: 0.6,
                title: false,
                shadeClose: true, //点击遮罩关闭
                content: `<div class="footer-qrcode">
                        <img src="/src/images/1.png" alt="">
                        <span>小程序</span>
                     </div>`
            });
        })
         $(document).on('click','.m-follow-us .qrcode_fs', function() {
            layer.open({
                type: 1,
                area: ['200px', '230px'],
                shade: 0.6,
                title: false,
                shadeClose: true, //点击遮罩关闭
                content: `<div class="footer-qrcode">
                        <img src="/src/images/1.png" alt="">
                        <span>微信二维码</span>
                     </div>`
            });
        })
$(document).on('click','#footer .m-footer-nav dl dt', function() {
            if ($(this).siblings().is(".erji")) {
                if ($(this).parent().is(".active")) {
                    $(this).siblings(".erji").stop(true, false).slideUp();
                    $(this).parent().removeClass("active")
                } else {
                    $("#footer .m-footer-nav dl dt").siblings(".erji").stop(true, false).slideUp();
                    $(this).siblings(".erji").stop(true, false).slideDown();
                    $(this).parent().addClass("active").siblings().removeClass("active")
                }
            }
        })