 function myFunction(){
    let x=document.getElementById("em").value;
    let y=document.getElementById("phone").value;
    let z=document.getElementById("address").value;
    let text;
    if((x=="")&&(y=="")&& (z=="")){
        text="All Fields is a must!!";
        alert(text);
    }
    else if((x=="")&&(y=="")){
        text="Email and Phone Fields required";
        alert(text);
    }
    else if((x=="")&&(z=="")){
        text="Email and Address Fields required!";
        alert(text);
    }
    else if((y=="")&&(z=="")){
        text="Phone and Address Fields required!";
        alert(text);
    }
    else if(x==""){
        text="Email Field Required";
        alert(text);
    }
    else if(y==""){
        text="phone Field Required";
        alert(text);
    }
    else if(z==""){
        text="Address Field Required!";
        alert(text);

    }
    else{
        alert("Successfully!!");
     
}
}