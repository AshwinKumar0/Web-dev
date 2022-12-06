let sildes = document.getElementsByClassName('slide'); 
let counter = 0;
function controller(i){
    counter = counter + i;
    if(counter > sildes.length -1 ){
        counter = 0;
    }
    if(counter < 0){
        counter = sildes.length-1;
    }
    slider(counter);
}

slider(counter);

function slider(count){


       for(let a of sildes) {
        a.style.display = "none";
       }

        if(count === 2) {
          let txt =  document.getElementsByClassName('caption');
          txt[count].style.color = 'white'; 
    }

    sildes[count].style.display = "block";
}
let left = document.getElementsByClassName('prev');
let right = document.getElementsByClassName('next');

