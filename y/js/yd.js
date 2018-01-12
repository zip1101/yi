let n=0;
var imgs = document.querySelectorAll(".ban .img_box");
console.log(imgs);
var pagings= document.querySelectorAll(".yuan li" );
// console.log(pagings);
var banners= document.querySelector(".wrap");
var prev= document.querySelector(".left");
var next=document.querySelector(".right");
// console.log(prev);
{
pagings.forEach(function(ele,index){
	ele.onclick=function(){
		// for(let i=0; i<imgs.length;i++){
		// 	pagings[i].classList.remove("active");
		// 		imgs[i].classList.remove("active");
		// 	} 
		// 	this.classList.add("active");
		// 	imgs[index].classList.add("active");
		// 	n = index;
		 move(index);
		}
	})
    }
let st=setInterval(move,2000);
function move(index){
	if(typeof index =="number"){
		if(index==-1){
			n--;
		}else{
			n=index;
		}
	}else{
		n++;
	}
	if(n<0){
		n = imgs.length-1;
	}
	if(n==imgs.length){
		n=0;
	}
	for(let i=0;i<imgs.length;i++){
		pagings[i].classList.remove("active");
		imgs[i].classList.remove("active");
	}
	pagings[n].classList.add("active");
	imgs[n].classList.add("active");
}   
    banners.onmouseover=function(){
    	clearInterval(st);
    }
    banners.onmouseout=function(){
    	st=setInterval(move,2000);
    }
    next.onclick = function(){
    	move();
    }
    prev.onclick = function(){
    	move(-1);
    }
