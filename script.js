document.addEventListener("DOMContentLoaded", getTime)


function getTime (){ 


    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();




    
    var images = [
        "image1.jpg",  // مسیر عکس اول
        "image2.jpg",  // مسیر عکس دوم
        "image3.jpg"   // مسیر عکس سوم
    ];




    consle.log(hou)
    let bg = document.getElementById("backGround")
    if (hours >= 6 && hours < 18 ){
        
        bg.style.src = "day.jpg"
    }else if (hours >= 18 && hours < 24){
        document.getElementById("backGround").appendChild("midday.jpg");
    }else if ( hours < 6){ 
        bg.style.src = "day.jpg"
    
    }
    
     


    document.getElementById("imageContainer").appendChild(imgElement);

    
    alert("کاربر ساعت " + hours + ":" + minutes + " وارد صفحه شد.");
};    


