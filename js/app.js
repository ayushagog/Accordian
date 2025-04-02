var btns = document.querySelectorAll('.btns');
var cont = document.querySelectorAll('.cont');
var icn = document.querySelectorAll('.btns i');
// console.log(icn);
// console.log(btns , cont);


// btns.forEach(
//     function(btn,i){
//     // console.log(btn, i)
//     btn.addEventListener('click',function(){
//         // console.log(btn);
//         // console.log(i);
//         btns.forEach(function(data,ind){
//             // console.log(data, ind)

//         })
//     })

// })

btns.forEach(
    function(btn,i){
        // console.log(btn,i)
        btn.addEventListener('click' ,function(){
            // console.log(btn,i);
            btns.forEach(
                function(but,ind){
                    // console.log(but,ind)
                    if(i==ind){
                        cont[i].classList.add('show');
                        icn[i].classList.add('ic');
                    }
                    else{
                        cont[ind].classList.remove('show');
                        icn[ind].classList.remove('ic');
                    }

                }
            )
        })
    }
)