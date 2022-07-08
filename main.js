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

