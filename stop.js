var imgs=[imgs/burgar.jpg,imgs/mexico.jpg]

var i;
functionp play(){
    console.log
    setTimeout(() => {
        document.getElementById("img").src= imgs[i];
        i++;
        if(i<imgs.length){
            play()
        }else{
            i=0;
        };
    },500);
}

var person = {
    Fname = "alma"
    Lname= sh
}
