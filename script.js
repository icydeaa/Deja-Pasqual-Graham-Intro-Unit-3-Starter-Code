/* Declare variables below to save the different sections (divs) of your story*/

let optiononescreen= document.querySelector(".option-one-screen")
let optiononebutton= document.querySelector(".option-one-button")

let optiontwoscreen= document.querySelector(".option-two-screen")
let optiontwobutton= document.querySelector(".option-two-button")

let optiononeend=document.querySelector(".option-one-end")

let optiontwoend= document.querySelector(".option-two-end")

let storyopening= document.querySelector(".story-opening")

 optiononebutton.onclick=function(){
optiononescreen.style.display="block";
storyopening.style.display="none";
};
 optiontwobutton.onclick=function(){
optiontwoscreen.style.display="block";
storyopening.style.display="none";
};
optiononescreen.onclick=function(){
optiononescreen.style.display="none";
optiononeend.style.display="block";
}
optiontwoscreen.onclick=function(){
  optiontwoscreen.style.display="none";
  optiontwoend.style.display="block";
}
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
/*
INSERT_VARIABLE.onclick=function(){


};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
