// let bx1 = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = " new List 5";
// bx1.appendChild(item);
// let fst = bx1.firstElementChild.nextElementSibling.nextElementSibling;
// console.log(fst.innerHTML);
// bx1.insertBefore(item,fst);
// let  fst1 = bx1.firstElementChild;
// console.log(fst1.innerHTML)

// let parent = document.body;
// let elm = document.createElement("h2");
// elm.textContent = "I am H2";
// let lst = document.getElementById("box2");
// parent.insertBefore(elm,lst);


// let box = document.getElementById("box2");
// console.log(box);
// let list = box.getElementsByTagName("ul")
// console.log(list);
// let elm = list[0].firstElementChild.nextElementSibling;
// console.log(elm);
// list[0].removeChild(elm);
// box.removeChild(list[0]);

// let list = document.getElementById("list");
// let clone = list.cloneNode(true);
// console.log(clone);
// let box = document.getElementById("box2")
// console.log(box);
// box.appendChild(clone);
// clone.id = "list2";



// let parent = document.getElementById("list");
// let item = document.createElement("li");
// item.textContent = "List important";
// let rplc = parent.firstElementChild.nextElementSibling;
// parent.replaceChild(item,rplc);


/*****************palindrome Checker *************/

// let st  = prompt("Enter a string");
// let str = st.replace(/\s+/g, "");
// let start = 0;
// let end = str.length -1;
// let mid =parseInt((start+end)/2);
// let length = (str.length%2===0)? "even" : "odd";
// if(length=="even"){
//    while(start <= mid && end > mid){
//     if(str.charAt(start) !== str.charAt(end)){
//         alert("Not Palindrome");
//         break;
//     } 
//     if(start === mid && end === mid+1 && str.charAt(start) === str.charAt(end) ){
//         alert("Is palindrome");
//     }
//     start++;
//     end--;
//    }

// }
// else if(length=="odd"){
//     while(start <= mid && end >= mid){
//         if(str.charAt(start) !== str.charAt(end)){
//             alert("Not Palindrome");
//             break;
//         } 
//         if(start === end && str.charAt(start) === str.charAt(end) ){
//             alert("Is palindrome");
//     }
//
//        start++;
//         end--;
//        }
// }
// else{
//    alert("Invalid String");
// }

/********************** *********************/


// let btn = document.getElementById("btn");
// btn.setAttribute("class","press");
// let val = btn.hasAttribute("name");
// let name = "xyz";
// console.log(name);


/**********classes ******************/

//1. Created a Vehicle Type Class.
//2. Added Properties to Vehicle Class Such as How many wheels are there,
// FuelType,OwnerName,VehicleName
//3. Added Functions to it such as Type (which display FuelType of Vehicle),
// WheelsType (which displays How many Wheels vehicle have),
// Drive (which display the Owner is Driving the Vehicle),
// Break (Which displays the Owner is Applying Break on the Vehicle)

//4. Created an object of Vehicle Class Name BMW Added its Porperties one by one.
// also added a property after creating object VehicleColor.
//5. Created a Loop to Display BMW properties.
//6. Called BMW Drive and Break Function
//7. Created Another Vehicle Apache.
//8. Called Apache FuelType Function.
//9. Called Apache WheelType Function.
//10. Created JSON for BMW and Apache.
/*
class Vehicle {
    Wheels;
    FuelType;
    OwnerName;
    VehicleName;
    constructor(Wheels,FuelType,OwnerName,VehicleName){
        this.Wheels = Wheels;
        this.FuelType = FuelType;
         this.OwnerName = OwnerName;
         this.VehicleName = VehicleName;
    }
  
    Type() {
        switch(this.FuelType) {
            case "Petrol" : alert( this.VehicleName +` Runs on Petrol`);
            break;
            case "Deisel" : alert( this.VehicleName +` Runs on Diesel`);
            break;
            default : alert(`Invalid Wheels`);
        }
    }

    WheelsType() {
        if(this.Wheels === 2) {
            alert(this.VehicleName +` is a Two Wheeler Bike`);
        }
        else if(this.Wheels === 3) {
            alert(this.VehicleName +` is a Three Wheeler Auto`);
        }
        else if(this.Wheels === 4) {
            alert(this.VehicleName +` is a Four Wheeler Car`);
        }
    }
    
       Drive() {
        alert(this.OwnerName + ` Is Driving his ` +this.VehicleName);
    }

    Break() {
        alert(this.OwnerName +` Is Applying Break On His ` +this.VehicleName);
    }
}

BMW = new Vehicle();
BMW.Wheels = 4;
BMW.FuelType = "Deisel";
BMW.OwnerName = "Aman";
BMW.VehicleName = "BMW X3";
BMW.VehicleColor = "Red";
for(let i in BMW) {
    alert(BMW[i]);
}
BMW.Drive();
BMW.Break();

Apache = new Vehicle(2,"Petrol","Ashwin","Apache RTR");
Apache.Type();
Apache.WheelsType();

const obj1 = JSON.stringify(BMW);
const obj2 = JSON.stringify(Apache);
console.log(obj1);
console.log(obj2);
*/


/************Css Selector ***************/
// let btn = document.getElementById("btn");


// btn.style.color = "black";
// btn.style.background = "yellow";
// btn.style.cssText = "background-color:red; color:white;";

// btn.setAttribute('style','color:White; background-color:red');
// btn.style.cssText += "border: 1px solid green;";

// let css = getComputedStyle(btn);
// console.log(css.background);



// box.className += "dim";
// console.log(box.className);
// console.log(box.classList);
// let result = box.classList.contains("color");
// console.log(result);

// let box = document.getElementById("box1");

// let height = box.clientHeight;
// let width = box.clientWidth;
// console.log(height);
// console.log(width);

/******************Event Listner ********************/
// let btn = document.getElementById("btn");


// function btnClick(){
//     console.log("Button was Clicked");
// }

// btn.addEventListener('click',btnClick);
// btn.addEventListener('mouseover',function(){
//     console.log("Mouse was Hovered");
// });
// btn.addEventListener('mouseout',function(){
//     console.log("Mouse out")
// })



// function click2(){
//     console.log("Click 2 Activated");
// }

// btn.addEventListener('click',click1);
// btn.addEventListener('click',click2);
// btn.removeEventListener('click',click2);

// window.addEventListener('DOMContentLoaded', function(){
//     console.log("DOM tree Created");
// })
// window.addEventListener('load',function(){
//     console.log("Fully Loaded");


// let box = document.getElementById("box1");
// box.setAttribute('style', 'height:100px; width:300px; border:1px solid red; margin:5%; background-color:blue;');
// box.addEventListener('mouseup',function(){
//     alert("Event Activated");
// });


// window.addEventListener('keydown',checkKey);
// function checkKey(event){
//     console.log(event.key);
// }

// let bdy = document.getElementById("body");

// function wheel(event){
//      if(event.deltaY < 0){
//         console.log("Scrolling up");
//       }
//       else if(event.deltaY > 0) {
//         console.log("Scrolling Down");
//       }
// }


// window.addEventListener('wheel', wheel);

// window.addEventListener('scroll',function(){
//     if(window.pageYOffset > 150) {
//         document.body.style.background = "red";
//     }
// })

// let y = document.getElementById("myInput");
// console.log(y);
//  y.addEventListener('focus',function(){
//     y.style.background = "yellow";

//  })
//  y.addEventListener('blur', function(){
//     y.style.background = "white";
//  })

// y.addEventListener('input', function(){
//     console.log(this.value);
// })

let box = document.getElementById("box1");
box.setAttribute('style','border:2px solid; width:300px; height:200px; margin:5%; background-color:yellow');
 let btn = document.getElementById("btn");
 btn.setAttribute('style', 'background-color:red; color:white;');





    
