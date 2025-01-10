document.addEventListener("DOMContentLoaded", getTime)


function getTime (){ 


    var currentDate = new Date();
    var hours = currentDate.getHours();
    

    let bg = document.getElementById("backGround")
    
    if (hours >= 6 && hours < 18 ){
         bg.setAttribute('src' , 'images/day.jpg')
    }else if (hours >= 18 && hours < 24){
        bg.setAttribute('src' , 'images/midday.jpg')
    }else if ( hours < 6){ 
        bg.setAttribute('src' , 'images/night.jpg')
    
    }
    
     


    document.getElementById("imageContainer").appendChild(imgElement);

    
    alert("کاربر ساعت " + hours + ":" + minutes + " وارد صفحه شد.");
};    


