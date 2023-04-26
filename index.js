function checkloveper(){
    const name=document.getElementById("name").value;
    const lname=document.getElementById("lname").value;
    if(name=="")
    {
        alert("Please Enter Your Name");
    }
    else if(name.length<=2)
    {
        alert("Minimum length is 3");
    }
     else if(!isNaN(name)){
        alert("Number is not allowed");
    }

    if(lname=="")
    {
        alert("Please Enter Your LoveName");
    }
    else if(lname.length<=2)
    {
        alert("Minimum length is 3");
    }
     else if(!isNaN(lname)){
        alert("Number is not allowed");
    }

    else{
        var lovedata=Math.floor(Math.random()*100);
   // console.log(lovedata);
   document.getElementById("lovevalue").value=lovedata+"%";
}   
}
