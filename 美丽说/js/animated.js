function animated(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-obj.offsetLeft)/10;
        step = step >= 0? Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }else{
            obj.style.left=obj.offsetLeft+step+'px';
        }
    },15)
}


function animated_scroll(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var step=(target-window.pageYOffset)/10;
        step = step >= 0? Math.ceil(step):Math.floor(step);
        if(window.pageYOffset==target){
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }else{
            window.scroll(0,window.pageYOffset+step);
        }
    },15)
}