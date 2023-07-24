// document.body.style.backgroundImage="url('cal.png')"
let input=document.getElementById("inputbox");
let btn=document.querySelectorAll("button");
let str="";
let bracket=true
// let arr=Array.from(btn);
btn.forEach(myFun =>{
    myFun.addEventListener("click",(elm)=>{
     if(elm.target.innerHTML== "="){

        str=eval(str);
        input.value=str;
     }
     else if(elm.target.innerHTML== "AC"){
        str="";
        input.value=str;
     }
     else if(elm.target.innerHTML== "Del"){
        str=str.substring(0,str.length-1);
        input.value=str;
     }
     else if(elm.target.innerHTML== "√"){
      str=Math.sqrt(str);
      input.value=str;
        
     }
     else if(elm.target.innerHTML== "π"){
      str=Math.PI;
      input.value=str;
        
     }   
     else if(elm.target.innerHTML== "x²"){
          str=Math.pow(str,2);
          input.value=str;
     }   
     else if(elm.target.innerHTML== "log"){
          str=Math.log(str);
          input.value=str;
     }   
     else if(elm.target.innerHTML== "%"){
      // str+=elm.target.innerText;
      // input.value=str;
      // input.value=str;
      // str+=input.value+"%";
        
        str=str/100;
          input.value=str;
        
     }
     else if(elm.target.innerText== "()"){
         if (bracket==true) {
            str+="(";
           input.value=str;
           bracket = false
         }
         else{
            str+=")";
            input.value=str;
            bracket = true
         }
     }
     else{
        str+=elm.target.innerText;
        input.value=str;
     }
    });
})