$(function() {
  // 保存歌曲
  var songs = [
    "done for me",
    "LiSA - 紅蓮華",
    "いいんですか",
    "赤伶",
    "年轮说",
    "恋爱循环（cover 花泽香菜）",
    "年少有为",
    "小城谣",
    "霜雪千年",
    "窗外的颜色",
    "即兴",
    "给喜欢的人听",
    "不好 优雅都不见了",
    "Lucky"
  ];

  // 添加歌曲
  for (var i = 0; i < songs.length; i++) {
    var div = "";
    if (i === 0) {
      div = $(
        "<div class='song-bg' data-num='" + i + "'>" + songs[i] + "</div>"
      );
    } else {
      div = $("<div  data-num='" + i + "'>" + songs[i] + "</div>");
    }

    $(".s-line").append(div);
  }
  $(".sang-line>span").text(" [" + songs.length + "]");

  // 收缩歌曲列表
  $(".sang-line").on("click", function() {
    $(".l-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    $(".ke-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    var unfold = $(this).attr("data-unfold");
    //  console.log(unfold);
    if (unfold == 0) {
      $(".s-line").animate({ height: "420px" }, 500);
      $(".sang-line")[0].style.border = "none";
      $(this).attr("data-unfold", 1);
    } else {
      $(".s-line").animate({ height: "0px" }, 500, function() {
        $(".sang-line")[0].style.borderBottom = "1px solid #8396a5";
      });
      $(this).attr("data-unfold", 0);
    }
  });
  // 收缩最近歌曲列表
  $(".lately-line").on("click", function() {
    $(".ke-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    $(".s-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    var unfold = $(this).attr("data-unfold");
    //  console.log(unfold);
    if (unfold == 0) {
      $(".l-line").animate({ height: "420px" }, 500);
      $(".lately-line")[0].style.border = "none";
      $(this).attr("data-unfold", 1);
    } else {
      $(".l-line").animate({ height: "0px" }, 500, function() {
        $(".lately-line")[0].style.borderBottom = "1px solid #8396a5";
      });
      $(this).attr("data-unfold", 0);
    }
  });
  // 收缩喜欢歌曲列表
  $(".like-line").on("click", function() {
    $(".l-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    $(".s-line")
      .css({ height: "0px" })
      .prev()
      .attr("data-unfold", 0);
    var unfold = $(this).attr("data-unfold");
    //  console.log(unfold);
    if (unfold == 0) {
      $(".ke-line").animate({ height: "420px" }, 500);
      $(".like-line")[0].style.border = "none";
      $(this).attr("data-unfold", 1);
    } else {
      $(".ke-line").animate({ height: "0px" }, 500, function() {
        $(".lately-line")[0].style.borderBottom = "1px solid #8396a5";
      });
      $(this).attr("data-unfold", 0);
    }
  });
  // 绑定双击事件
  $(".s-line>div").on("dblclick", function() {
    var songName = $(this).text();
    //   console.log(songName);
    $(".song-name").text(songName);
    $(".audio")[0].src = "./music/" + songName + ".mp3";
    $(".play")[0].innerHTML = "&#xe613;";
    $(".audio")[0].play();
    $(".play").attr("data-index", 2);
    $(this).addClass("song-bg");
    $(this)
      .siblings()
      .removeClass();
  });
  // 绑定双击事件
  $(".l-line>div").on("dblclick", function() {
    var songName = $(this).text();
    //   console.log(songName);
    $(".song-name").text(songName);
    $(".audio")[0].src = "./music/" + songName + ".mp3";
    $(".play")[0].innerHTML = "&#xe613;";
    $(".audio")[0].play();
    $(".play").attr("data-index", 2);
    $(this).addClass("song-bg");
    $(this)
      .siblings()
      .removeClass();
  });
  //   上一首
  $(".perv").on("click", function() {
    var randomNum = Math.floor(Math.random() * songs.length);
    var singleCycle = $(".way-box>.active").hasClass("single-cycle");
    var listCycle = $(".way-box>.active").hasClass("list-cycle");
    var randomPlay = $(".way-box>.active").hasClass("random-play");
    if (singleCycle || listCycle) {
      var $num = $(".song-bg").prev()[0];
      if ($num === undefined) {
        var $prevSong = $(".s-line>div").last();
      } else {
        var $prevSong = $($num);
      }
      var songName = $prevSong.text();
      $(".song-name").text(songName);
      $(".audio")[0].src = "./music/" + songName + ".mp3";
      $(".play")[0].innerHTML = "&#xe613;";
      $(".audio")[0].play();
      $(".play").attr("data-index", 2);
      $prevSong.addClass("song-bg");
      $prevSong.siblings().removeClass();
    }
    if (randomPlay) {
      var nextSong = $(".s-line>div")[randomNum];
      var songName = $(nextSong).text();
      console.log(songName);
      $(".song-name").text(songName);
      $(".audio")[0].src = "./music/" + songName + ".mp3";
      $(".play")[0].innerHTML = "&#xe613;";
      $(".audio")[0].play();
      $(".play").attr("data-index", 2);
      $(nextSong).addClass("song-bg");
      $(nextSong)
        .siblings()
        .removeClass();
    }
    var like=$('.song-bg').attr('data-like');
    if(like==='likes'){
       $('.like').css({
      color: "#ff5e48"
    });
    $('.like').attr("data-like", "likes");
    }else{
      $('.like').css({
        color: "#fff"
      });
      $('.like').attr("data-like", "none");
    }
   
  });

  //   下一首
  $(".next").on("click", function() {
    var randomNum = Math.floor(Math.random() * songs.length);
    var singleCycle = $(".way-box>.active").hasClass("single-cycle");
    var listCycle = $(".way-box>.active").hasClass("list-cycle");
    var randomPlay = $(".way-box>.active").hasClass("random-play");
    if (singleCycle || listCycle) {
      var $num = $(".song-bg").next()[0];
      if ($num === undefined) {
        var $nextSong = $(".s-line>div").first();
      } else {
        var $nextSong = $($num);
      }
      var songName = $nextSong.text();
      $(".song-name").text(songName);
      $(".audio")[0].src = "./music/" + songName + ".mp3";
      $(".play")[0].innerHTML = "&#xe613;";
      $(".audio")[0].play();
      $(".play").attr("data-index", 2);
      $nextSong.addClass("song-bg");
      $nextSong.siblings().removeClass();
    }

    if (randomPlay) {
      var nextSong = $(".s-line>div")[randomNum];
      var songName = $(nextSong).text();
      // console.log(songName);
      $(".song-name").text(songName);
      $(".audio")[0].src = "./music/" + songName + ".mp3";
      $(".play")[0].innerHTML = "&#xe613;";
      $(".audio")[0].play();
      $(".play").attr("data-index", 2);
      $(nextSong).addClass("song-bg");
      $(nextSong)
        .siblings()
        .removeClass();
    }
    var like=$('.song-bg').attr('data-like');
    if(like==='likes'){
       $('.like').css({
      color: "#ff5e48"
    });
    $('.like').attr("data-like", "likes");
    }else{
      $('.like').css({
        color: "#fff"
      });
      $('.like').attr("data-like", "none");
    }
   
  });
  // 点击播放

  $(".play").on("click", function() {
    var index = $(".play").attr("data-index");
    // console.log(index);
    if (index == 1) {
      this.innerHTML = "&#xe613;";
      $(".audio")[0].play();
      $(".play").attr("data-index", 2);
    } else {
      this.innerHTML = "&#xe6e2;";
      $(".audio")[0].pause();
      $(".play").attr("data-index", 1);
    }
  });
  $(".audio")[0].onpause = function() {
    $(".dot").removeClass("playNow");
  };

  // 切换播放状态
  $(".play-way").on("click", function() {
    var dNone = $(".way-box").hasClass("d-none");
    $(".voice-box").addClass("d-none");
    if (dNone) {
      $(".way-box").removeClass("d-none");
      return;
    }
    $(".way-box").addClass("d-none");
  });
  $(".way-list").on("click", function() {
    var active = $(this).hasClass("active");
    if (!active) {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      var sa = $(this)
        .children(".iconfont")
        .text();
      $(".play-way").text(sa);
      $(".way-box").addClass("d-none");
      $(".audio").removeAttr("loop");
    }
  });
  // 获取播放条的长度
  var lineWidth = $(".line")[0].offsetWidth;
  // console.log(lineWidth);
  // 获取音量条的长度
  var vHeight = $(".voice-line").height();
  var num = 0;

  // 最近播放存入
  var lately = [];
  var likes=[];

  //当音频可以播放时, 只会触发一次
  $(".audio")[0].oncanplay = function() {
    // 随机歌曲数
    var random = Math.floor(Math.random() * songs.length);

    // console.log('volume ==> ', volume);

    //获取总时间
    var duration = Math.floor(this.duration);

    var num = Number((lineWidth / duration).toFixed(2));
    // console.log(num);

    // 歌曲分钟
    var minute = Math.floor(duration / 60);
    var second = duration % 60;
    // console.log('duration ==> ', duration, minute, second);
    if (second < 10) {
      second = "0" + second;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    $(".minute").text(minute);
    $(".second").text(second);

    // 改变声音
    //获取音频总音量
    var volume = this.volume;
    // 获取声音比
    var voiceNum = 1 / vHeight;
    // 点击显示音量
    $(".voiceBox>.iconfont").on("click", function() {
      var dNone = $(".voice-box").hasClass("d-none");
      $(".way-box").addClass("d-none");
      // console.log(dNone, volume, vHeight, voiceNum);
      if (dNone) {
        $(".voice-box").removeClass("d-none");
        return;
      }
      $(".voice-box").addClass("d-none");
    });
    // 点击音量条调节声音
    $(".voice-box>.voice-line").on("click", function(e) {
      var Y = e.clientY;
      var y = this.getBoundingClientRect().top;
      var bottomY = vHeight - Y + y;
      var max = vHeight - 4;
      bottomY > max ? max : bottomY - 4;
      if (bottomY < max) {
        $(".voice-dot")[0].style.bottom = bottomY - 4 + "px";
        $(".voice-s-line")[0].style.height = bottomY + "px";
        // return;
      } else {
        $(".voice-dot")[0].style.bottom = max + "px";
        $(".voice-s-line")[0].style.height = vHeight + "px";
      }

      var voiceY =
        Math.floor(Number((voiceNum * bottomY).toFixed(2)) * 10) / 10;
      $(".audio")[0].volume = voiceY;
      // console.log(voiceY,voiceNum,volume);

      // $(".audio")[0].currentTime = timeX;
    });
    //当前音频播发时刻发生变化时触发事件，一般同于操作歌词
    $(".audio")[0].ontimeupdate = function() {
      // 当播放时发光
      $(".dot").addClass("playNow");
      //获取音频当前播放时间
      var currentTime = Math.floor(this.currentTime);
      var playMinute = Math.floor(currentTime / 60);
      var playSecond = currentTime % 60;
      if (playMinute < 10) {
        playMinute = "0" + playMinute;
      }
      if (playSecond < 10) {
        playSecond = "0" + playSecond;
      }
      $(".playMinute").text(playMinute);
      $(".playSecond").text(playSecond);

      // console.log(playMinute, playSecond);

      var dotLetf = Math.floor(currentTime * num);
      $(".dot")[0].style.left = dotLetf + "px";
      $(".progress")[0].style.width = dotLetf + "px";
      // console.log(duration,currentTime);

      // console.log('currentTime ==> ', currentTime, dotLetf);

      var singleCycle = $(".way-box>.active").hasClass("single-cycle");
      var listCycle = $(".way-box>.active").hasClass("list-cycle");
      var randomPlay = $(".way-box>.active").hasClass("random-play");
      // console.log(singleCycle, listCycle, randomPlay, $(".way-box>.active"));
      // 单曲循环
      if (singleCycle) {
        $(".audio")[0].loop = "loop";
      }
      // 顺序播放
      if (listCycle) {
        if (duration === currentTime) {
          var $num = $(".song-bg").next()[0];
          if ($num === undefined) {
            var $nextSong = $(".s-line>div").first();
          } else {
            var $nextSong = $($num);
          }
          var songName = $nextSong.text();
          $(".song-name").text(songName);
          $(".audio")[0].src = "./music/" + songName + ".mp3";
          $(".play")[0].innerHTML = "&#xe613;";
          $(".audio")[0].play();
          $(".play").attr("data-index", 2);
          $nextSong.addClass("song-bg");
          $nextSong.siblings().removeClass();
        }
      }
      // 随机播放
      if (randomPlay) {
        if (duration === currentTime) {
          var nextSong = $(".s-line>div")[random];
          var songName = $(nextSong).text();
          console.log(songName);
          $(".song-name").text(songName);
          $(".audio")[0].src = "./music/" + songName + ".mp3";
          $(".play")[0].innerHTML = "&#xe613;";
          $(".audio")[0].play();
          $(".play").attr("data-index", 2);
          $(nextSong).addClass("song-bg");
          $(nextSong)
            .siblings()
            .removeClass();
        }
      }
      // 最近播放
      var late = $(".song-bg")
        .attr("data-play", "plays")
        .text();
      if (lately.indexOf(late) === -1) {
        lately.unshift(late);
        // 添加歌曲
          var divs = $("<div>" + lately[0] + "</div>");
          $(".l-line").prepend(divs);
        $(".lately-line>span").text(" [" + lately.length + "]");
      }
    };
    // 点击音乐进度条
    $(".line").on("click", function(e) {
      var X = e.screenX;
      var x = this.getBoundingClientRect().left;
      var leftX = Math.floor(X - x);
      $(".dot")[0].style.left = leftX + "px";
      $(".progress")[0].style.width = leftX + "px";
      var timeX = Math.floor(leftX / num);
      $(".audio")[0].currentTime = timeX;
      // console.log(x, X, leftX,timeX);
    });
    //   拖动快进
    $(".line").on("mousemove", function(e) {
      var x = e.clientX;
      var lineLeft = $(this).offset().left;
      var moveX = x - lineLeft;
      //   console.log(x, lineLeft, moveX);
    });
  };
  $(".like").on("click", function() {
    var like = $(this).attr("data-like");
    if (like === "none") {
      var late = $(".song-bg")
    .attr("data-like", "likes")
    .text();
      $(this).css({
        color: "#ff5e48"
      });
      var nums=$(".song-bg").attr('data-num');
      $(this).attr("data-like", "red");
      if(likes.indexOf(late)===-1){
        likes.unshift(late);
        var divs= $("<div data-nums="+nums+">" + likes[0] + "</div>");
      $(".ke-line").prepend(divs);
      $(".like-line>span").text(" [" + likes.length + "]");
      }
      
    } else {
      $(this).css({
        color: "#fff"
      });
      $(this).attr("data-like", "none");
      $(".song-bg")
    .removeAttr("data-like")
    $.each($('.ke-line>div'),function(index,value){
      if($(this).attr('data-nums')===$(".song-bg").attr('data-num')){
        $(this).remove()
      }
    })
        likes.splice(0,1);
        $(".like-line>span").text(" [" + likes.length + "]");
      
    }
  });
});
