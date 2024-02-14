let a=document.querySelector('.toggle-button');
let x=document.querySelector('.monthly1');
let y=document.querySelector('.monthly2');
let z=document.querySelector('.monthly3');
let b=document.getElementsByClassName('btn');

let turn=0;

function state(){
    if (turn==0) {
        x.innerHTML="$199.99";
        y.innerHTML="$249.99";
        z.innerHTML="$399.99";
        turn=1;
    }
    else{
        x.innerHTML="$19.99";
        y.innerHTML="$24.99";
        z.innerHTML="$39.99";
        turn=0;
    }
}

