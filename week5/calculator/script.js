(function)

    let screen=document.guerySelector(".screen")
    let buttons= document.querySelectorAll(".btn")
    let clear=document.querySelector(".btn-clear")
    let equal=document.querySelector(".btn-equal")
    
    buttons.forEach(function(buttom)
     buttons.addEventListener("click", function(e){
        let value= e.target.dataset.num;
        screen.value += value;
     })
        equal.addEventListener("click", function(e){
        if (screen.value ===""){
            screen.value="Please enter a Value";
                    }else {
                        let answer=eval(screen.value);
                        screen.value=answer 
                                      }
    }
    clear.addEventListener("click" ,  function(e){
        screen.value=""
    })
