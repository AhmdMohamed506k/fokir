
const nameInput = document.querySelector("#FirstNameInput1");
const EmailInput = document.querySelector("#EmailControlInput1");
const subjectInput = document.querySelector("#subjectInput1");
const TextArea = document.querySelector("#massageTextarea1");


const sections = document.querySelectorAll(".section");
const active = document.querySelectorAll("nav ul li a");




const ourTeam = document.querySelectorAll("#ourTeamSection .container .ourTeamsectionContant .row .col-3 .OurTeamCardBody h3");




function scroll(){

    let sectionPostion = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section , i)=>{

        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;
       


        if(sectionPostion >= sectionTop && sectionPostion < sectionBottom){
           active.forEach((link)=> link.classList.remove("active"))
           active[i].classList.add("active")
        }




    })


}


var prevScroll=window.scrollY 
document.addEventListener("scroll", function(e){
    
  const currentScroll=window.scrollY
  if(prevScroll < currentScroll ){
   
   
    document.querySelector("nav").classList.add("sticky-navDown")
    
    document.querySelector("nav").classList.remove("sticky-navTop")
    document.querySelector("nav").classList.remove("sticky-nav")
    
  }else if(window.scrollY < 60){

    document.querySelector("nav").classList.add("sticky-nav")
    document.querySelector("nav").classList.remove("sticky-navTop")
    document.querySelector("nav").classList.remove("sticky-navDown")

  }else{

    document.querySelector("nav").classList.add("sticky-navTop")
    document.querySelector("nav").classList.remove("sticky-navDown")
    document.querySelector("nav").classList.remove("sticky-nav")
  }
  prevScroll = currentScroll
})





// ===



window.addEventListener("scroll",function(){

    if(window.scrollY > "1940"){

      const counter1 = setInterval(() => {
            
            if(ourTeam[0].innerHTML == "200"){
                clearInterval(counter1)
            }else{
                ++ourTeam[0].innerHTML
            }
            
        }, 80);


        
        const counter2 = setInterval(() => {
            
            if(ourTeam[1].innerHTML == "335"){
                clearInterval(counter2)
            }else{
                ++ourTeam[1].innerHTML
            }
            
        }, 80);


        const counter3 = setInterval(() => {
            
            if(ourTeam[2].innerHTML == "1800"){
                clearInterval(counter3)
            }else{
                ++ourTeam[2].innerHTML
            }
            
        }, 15);


        const counter4 = setInterval(() => {
            
            if(ourTeam[3].innerHTML == "1200"){
                clearInterval(counter4)
            }else{
                ++ourTeam[3].innerHTML
            }
            
        }, 20);
       
       
       
       
    
                
                

    }

    scroll()
})
             
        
            
    
    
    










//=======> LOADER
window.addEventListener("load",function () {

    document.querySelector(".spinner").style.display="none"
    document.querySelector("#loading").style.zIndex="-1"
    document.querySelector("#loading").style.backgroundColor ="transparent"
    document.querySelector("body").style.overflow="auto"
   
  
})
// =====















// ContantUsSection Function
function nameVailedtion(i){
   
    
    
    if(i == ""){
     document.querySelector("#nameInputAlart").style.display="block";
     document.querySelector("#nameInputAlart").style.marginBottom ="-30px";
     
    
  


    }else if(i!=""){
       document.querySelector("#nameInputAlart").style.display="none";
       Check = 1
      
       
       
       
    }

     
  
}
function EmailVailedtion(i){


    
    if(i == false ||  EmailInput.value.includes("@") == false ){
     document.querySelector("#EmailInputAlart").style.display="block";
     document.querySelector("#EmailInputAlart").style.marginBottom ="-30px";
     
     
  
     
        
    }else if(EmailInput.value.includes("gmail.com") == false && EmailInput.value.includes("yahoo.com") == false ){
        document.querySelector("#EmailInputAlart").style.display="none";
        document.querySelector("#EmailInputAlart").style.marginBottom ="-30px";


        document.querySelector("#Email2InputAlart").style.display="block";
        document.querySelector("#Email2InputAlart").style.marginBottom ="-30px";
       
        

        
      
     
    }else{
        document.querySelector("#Email2InputAlart").style.display="none";
        Check = 2
      
    }
    
}
function subjectVailedtion(i){


    
    if(i == false  ){
     document.querySelector("#subjectInputAlart").style.display="block";
     document.querySelector("#subjectInputAlart").style.marginBottom ="-20px";
        
   
        
    }else{
        document.querySelector("#subjectInputAlart").style.display="none";
        Check = 3
     
    }
    
}
function texrAreaVailedtion(i){


    
    if(i == false  ){
     document.querySelector("#TextAreaAlart").style.display="block";
     document.querySelector("#TextAreaAlart").style.marginBottom ="-10px";

    
     
   
        
    }else{
        document.querySelector("#TextAreaAlart").style.display="none";
        Check = 4
       
    
    }
 
}

function btnCheck(){


    if(Check == 0 ) {

     
        document.querySelector("#nameInputAlart").style.display="block";
        document.querySelector("#nameInputAlart").style.marginBottom ="-30px";
        

        document.querySelector("#EmailInputAlart").style.display="block";
        document.querySelector("#EmailInputAlart").style.marginBottom ="-30px";
     
        document.querySelector("#subjectInputAlart").style.display="block";
        document.querySelector("#subjectInputAlart").style.marginBottom ="-20px";
           

        document.querySelector("#TextAreaAlart").style.display="block";
        document.querySelector("#TextAreaAlart").style.marginBottom ="-10px";
   
       
      
    }else{

        document.querySelector("#nameInputAlart").style.display="none";
        document.querySelector("#Email2InputAlart").style.display="none";
        document.querySelector("#subjectInputAlart").style.display="none";
        document.querySelector("#TextAreaAlart").style.display="none";

       
   
    }
   


 

   
    
    
    
}
// ===


// Globle Functions
function refrushPage(){
    if(document.close){
        nameInput.value=" ";
        EmailInput.value="";
        subjectInput.value="";
        TextArea.value="";
        window.scrollTo(0,0)
     
    }
    
}
refrushPage()

