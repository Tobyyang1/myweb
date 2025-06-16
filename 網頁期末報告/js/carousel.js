let timer= setInterval(moveLeft,0); //計時器設定
let pos=0;  //目前X座標

function startCarousel(time){   //方便辨識進入點
    clearInterval(timer);
    setTimeout(()=>{timer= setInterval(moveLeft,0);},time);
}

function delay(time){   //用於延遲時間(雖然實際效果和start一樣)
    clearInterval(timer);
    setTimeout(()=>{timer= setInterval(moveLeft,0);},time);
}
function moveLeft()
{
    pos-=2;
    if(pos < -3200){
       pos = 0;
    }
    carousel.style.left = pos+"px";
    if(pos%640==0&&pos!=0){
        delay(5000);
    }
}

startCarousel(1000);    //進入點

imgs=document.querySelectorAll("#carousel img");
for(let i=0;i<imgs.length;i++){
    imgs[i].onclick=()=>{
        if(i==0||i==5){
            alert("這是第1則廣告")    
        }
       else{
            alert("這是第"+(i+1)+"則廣告")
       }
    }
}