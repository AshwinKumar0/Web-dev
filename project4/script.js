window.addEventListener('scroll',function(){
    let nv = document.getElementById("nv");
    
    if(this.window.pageYOffset > 200){
       nv.classList.add('sticky');
       
    }
    else{
        nv.classList.remove('sticky');
        
    }
})