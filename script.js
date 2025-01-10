document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();




    
    var images = [
        "image1.jpg",  // مسیر عکس اول
        "image2.jpg",  // مسیر عکس دوم
        "image3.jpg"   // مسیر عکس سوم
    ];





    document.getElementById("imageContainer").appendChild(imgElement);

    
    alert("کاربر ساعت " + hours + ":" + minutes + " وارد صفحه شد.");
});






// <div id="imageContainer"></div> <!-- اینجا عکس نمایش داده خواهد شد -->

    var randomImage = images[Math.floor(Math.random() * images.length)];

    // ایجاد تگ <img> و اضافه کردن آن به صفحه
    var imgElement = document.createElement("img");
    imgElement.src = randomImage;  // مسیر تصویر تصادفی
    imgElement.alt = "توضیحات تصویر";  // توضیح برای تصویر

    // اضافه کردن تصویر به صفحه
