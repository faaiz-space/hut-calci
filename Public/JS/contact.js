function promptMe()
{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    if((name.value === 'null' && email.value === 'null') || ( name.value === "" || email.value === "")) 
    {
        alert("Please Enter Your Details Bud. Feedback is Not Submitted !!😥😑");
    }
    else
    {
        alert("Your Feedback is Submitted !!😁🤩");
    }
}

