

const changeBG = function(color){
    document.body.style.backgroundColor = color;
    if(color === 'black'){
        let text = document.getElementsByClassName('text');
        for(let i of text){
            i.style.color = "white";
        }
    }
    else{
        let text = document.getElementsByClassName('text');
        for(let i of text){
            i.style.color = "black";
        }
    }
}
