const x=document.getElementsByClassName("card-body")
const head=document.querySelector(".announce")
const rst=document.querySelector(".reset")
class ttt{
    constructor(){
        this.draw= false
        this.win=false
        this.num=0
    }
    checkwinner(cells){
        return checkwin(cells)
    }
}
tick= new ttt()
let turn ='X'
// let num=0
// let win=false
// draw=false
var cells = [].slice.call(x);
console.log(tick.win)
console.log(cells)
cells.map((i)=>i.addEventListener('click',function handler(event){
    if(!tick.win && !tick.draw){
        console.log("clicked")
        console.log(this.innerText)
        if(this.innerText.length===0){
           this.style.backgroundColor=turn==='X'? "#007bff":"#20c997"
            this.innerText=turn
            tick.win= checkwin(cells)
            tick.num+=1
            tick.draw= tick.num===9? true: false
            if(!tick.draw &&!tick.win){
                turn= turn==='X'? 'O':'X'
                head.innerText= turn+" play"
            }
            else{
                head.innerText=tick.win? turn+" wins":"DRAW"
            }
            
        }
        
    }
}))
// for(let i=0;i<cells.length;i++){
//     cells.item(i).addEventListener('click',function handler(event){
//         if(!tick.win && !tick.draw){
//             console.log("clicked")
//             console.log(this.innerText)
//             if(this.innerText.length===0){
//                 cells[i].style.backgroundColor=turn==='X'? "#007bff":"#20c997"
//                 this.innerText=turn
//                 tick.win= checkwin(cells)
//                 tick.num+=1
//                 tick.draw= tick.num===9? true: false
//                 if(!tick.draw &&!tick.win){
//                     turn= turn==='X'? 'O':'X'
//                     head.innerText= turn+" play"
//                 }
//                 else{
//                     head.innerText=tick.draw?"DRAW": turn+" wins"
//                 }
                
//             }
            
//         }
//     })
// }

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
rst.addEventListener('click',function handler(event){
    for (const cell of cells) {
        cell.innerText="";
        cell.style.backgroundColor="#fff"
    }
    tick.num=0
    head.innerText="Play"
    turn='X'
    tick.win=false
    tick.draw=false
})
/* <footer>
<aside class="footernav footer1">
    <a href="mission.html">
        <h3>Our mission</h3>
    </a>
</aside>
<aside class="footernav footer2">
    <a href="contact.html">
        <h3>Contact</h3>
    </a>
</aside>
<aside class="footernav footer3">
    <a href="submitCode.html">
        <h3>Sumbit Code</h3>
    </a>
</aside>
<aside class="footernav ">
    <h3><a href="ttt.html"><h3>Play TTT</h3></a></h3>
</aside>
<aside class="footernav footer4">
    <h3>Copy Right is held by fake student</h3>
</aside>
</footer> */

