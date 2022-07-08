let crossout = document.querySelectorAll("#crossout-ol li");

for (let i = 0; i < crossout.length; i++){
    let co = crossout[i];
    // co.addEventListener('click', function(){
    //     console.log(co);
    // })
    co.addEventListener('click', function(){
        co.style.textDecoration = "line-through";
        console.log(co);
    })
}

let fadeout = document.querySelectorAll("#fadeout-ul li");

for (let i = 0; i < fadeout.length; i++){
    let fo = fadeout[i];
    fo.addEventListener('click', function(){
        fo.style.opacity = "0.0";
        console.log(fo);
    })
}

let disappear = document.querySelectorAll("#row img");

for (let i = 0; i < disappear.length; i++){
    let dis = disappear[i];
    dis.addEventListener('click', function(){
        dis.style.width = '0px';
        console.log(dis);
    })
}

let meteor = document.querySelectorAll("#destroy-all");


meteor.addEventListener('click', function(){
    for (let i = 0; i < crossout.length; i++){
        let co = crossout[i];
        co.style.textDecoration = "line-through";
        }

    for (let i = 0; i < crossout.length; i++){
        let co = crossout[i];
        co.style.textDecoration = "line-through";
        }

    for (let i = 0; i < disappear.length; i++){
        let dis = disappear[i];
        dis.style.width = '0px';
        }
    })


