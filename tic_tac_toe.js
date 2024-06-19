let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");
let b7=document.getElementById("b7");
let b8=document.getElementById("b8");
let b9=document.getElementById("b9");
let flag=1;
function display1()
{
    if(flag==1)
    {
        b1.value='X';
        b1.disabled=true;
        flag=0;
    }
    else
    {
        b1.value='O';
        b1.disabled=true;
        flag=1;
    }
}
function display2()
{
    if(flag==1)
    {
        b2.value='X';
        b2.disabled=true;
        flag=0;
    }else
    {
        b2.value='O';
        b2.disabled=true;
        flag=1;
    }
}
function display3()
{
    if(flag==1)
    {
        b3.value='X';
        b3.disabled=true;
        flag=0;
    }else
    {
        b3.value='O';
        b3.disabled=true;
        flag=1;
    }
}
function display4()
{
    if(flag==1)
    {
        b4.value='X';
        b4.disabled=true;
        flag=0;
    }else
    {
        b4.value='O';
        b4.disabled=true;
        flag=1;
    }
}
function display5()
{
    if(flag==1)
    {
        b5.value='X';
        b5.disabled=true;
        flag=0;
    }else
    {
        b5.value='O';
        b5.disabled=true;
        flag=1;
    }
}
function display6()
{
    if(flag==1)
    {
        b6.value='X';
        b6.disabled=true;
        flag=0;
    }else
    {
        b6.value='O';
        b6.disabled=true;
        flag=1;
    }
}
function display7()
{
    if(flag==1)
    {
        b7.value='X';
        b7.disabled=true;
        flag=0;
    }else
    {
        b7.value='O';
        b7.disabled=true;
        flag=1;
    }
}
function display8()
{
    if(flag==1)
    {
        b8.value='X';
        b8.disabled=true;
        flag=0;
    }else
    {
        b8.value='O';
        b8.disabled=true;
        flag=1;
    }
}
function display9()
{
    if(flag==1)
    {
        b9.value='X';
        b9.disabled=true;
        flag=0;
    }else
    {
        b9.value='O';
        b9.disabled=true;
        flag=1;
    }
}
function result(){
    document.getElementById("h1").innerHTML=("winner")
}
function result1()
{
   if((b1.value=='X'&& b2.value=='X'&& b3.value=='X')||(b1.value=='O'&& b2.value=='O'&& b3.value=='O'))
   {
    b1.style.color="red";
    b2.style.color="red";
    b3.style.color="red";
   }
   else if((b4.value=='X'&& b5.value=='X'&& b6.value=='X')||(b4.value=='O'&& b5.value=='O'&& b6.value=='O'))
   {
    b4.style.color="red";
    b5.style.color="red";
    b6.style.color="red";
   }
   else if((b7.value=='X'&& b8.value=='X'&& b9.value=='X')||(b7.value=='O'&& b8.value=='O'&& b9.value=='O'))
   {
    b7.style.color="red";
    b8.style.color="red";
    b9.style.color="red";
   }
   else if((b1.value=='X'&& b4.value=='X'&& b7.value=='X')||(b1.value=='O'&& b4.value=='O'&& b7.value=='O'))
   {
    b1.style.color="red";
    b4.style.color="red";
    b7.style.color="red";
   }
   else if((b2.value=='X'&& b5.value=='X'&& b8.value=='X')||(b2.value=='O'&& b5.value=='O'&& b8.value=='O'))
   {
    b2.style.color="red";
    b5.style.color="red";
    b8.style.color="red";
   }
   else if((b3.value=='X'&& b6.value=='X'&& b9.value=='X')||(b3.value=='O'&& b6.value=='O'&& b9.value=='O'))
   {
    b3.style.color="red";
    b6.style.color="red";
    b9.style.color="red";
   }
   else if((b1.value=='X'&& b5.value=='X'&& b9.value=='X')||(b1.value=='O'&& b5.value=='O'&& b9.value=='O'))
   {
    b1.style.color="red";
    b5.style.color="red";
    b9.style.color="red";
   }
   else if((b3.value=='X'&& b5.value=='X'&& b7.value=='X')||(b3.value=='O'&& b5.value=='O'&& b7.value=='O'))
   {
    b3.style.color="red";
    b5.style.color="red";
    b7.style.color="red";
   }
}