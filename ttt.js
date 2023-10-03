const cells=document.getElementsByClassName("card-body")
const head=document.querySelector(".announce")
let turn ='X'
let num=0
let win=false
draw=false
console.log(head)
console.log(cells)
for(let i=0;i<cells.length;i++){
    cells.item(i).addEventListener('click',function handler(event){
        if(!win && !draw){
            console.log("clicked")
            console.log(this.innerText)
            if(this.innerText.length===0){
                this.innerText=turn
                win= checkwin(cells)
                num+=1
                draw= num===9? true: false
                if(!draw &&!win){
                    turn= turn==='X'? 'O':'X'
                    head.innerText= turn+" play"
                }
                else{
                    head.innerText=draw?"DRAW": turn+" wins"
                }
                
            }
            
        }
        if(draw){

        }
    })
}

function checkwin(cells){
    for (let i = 0; i <= 6; i=i+3) {
        
        if(cells[i].innerText===cells[i+1].innerText && cells[i].innerText===cells[i+2].innerText && cells[i].innerText.length!==0){
            return true
        }
    }
    for (let i = 0; i <= 2; i=i+1) {
        
        if(cells[i].innerText===cells[i+3].innerText && cells[i].innerText===cells[i+6].innerText && cells[i].innerText.length!==0){
            return true
        }
    }
    if(cells[0].innerText===cells[4].innerText && cells[0].innerText===cells[8].innerText && cells[0].innerText.length!==0){
        return true
    }
    if(cells[2].innerText===cells[4].innerText && cells[2].innerText===cells[6].innerText && cells[2].innerText.length!==0){
        return true
    }
    return false
}