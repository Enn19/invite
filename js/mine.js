
//menu
$("#home-content span").click(function () 
{
    if ($('.sidenav').css("width") == "0px") {
        $(".sidenav").animate({width:"250px"},1000,function () {
            $("#home-content span").animate({marginLeft:"250px"})
        })
        
    } 
  
})
$("#leftMenu .closebtn").click(function () {
    $(".sidenav").animate({width:"0px"},1000,function () {
        $("#home-content span").animate({marginLeft:"0px"})
    }
    )
    
})


//slider
$(".toggle").click(function(){
    $(this).next(".inner").slideToggle();
})





//counter

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let datDiff = countDownDate - dateNow ;
    let days = Math.floor(datDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((datDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((datDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML= days + " "+"D";
    document.querySelector(".hours").innerHTML= hours + " "+"h";
    document.querySelector(".minutes ").innerHTML= minutes + " "+"m" ;
    document.querySelector(".seconds ").innerHTML= seconds + " "+"s";
},1000)




//100 charater

$(".text1").keyup(function(eInfo){
    if(eInfo.target.matches(".count-chars")){
        let value = eInfo.target.value;
        let valueLength = eInfo.target.value.length;
        let maxChars = parseInt(eInfo.target.getAttribute("data-max-chars"));
        let remainingChars = maxChars - valueLength ;
        if(valueLength > maxChars){
            eInfo.target.value = value.substr(0, maxChars);
            return;
        }
        eInfo.target.nextElementSibling.innerHTML = remainingChars +" "+ "characters remaining";
    }
})