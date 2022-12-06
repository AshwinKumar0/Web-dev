let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text = this.value;
    let char = text.length;
    let ch = document.getElementById("char");
    ch.innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    var cleanList = words.filter((elm)=>{
        if(elm != "")
        return elm;
    })
    console.log(cleanList);
    document.getElementById("word").innerHTML = cleanList.length;

})