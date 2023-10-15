let board=document.querySelector('#draw')
let px=0
   py=0
    cx=0
    cy=0

ctx=board.getContext('2d')

  var BB=board.getBoundingClientRect();
  var offsetX=BB.left;
  var offsetY=BB.top;   
  
board.addEventListener('mousemove', e=>{
    if (e.buttons !== 1){
        px=cx
        py=cy
        cx=e.clientX-offsetX
        cy=e.clientY-offsetY
        return
    } 
    
    console.log('x')
    ctx.beginPath(); // begin

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#c0392b';
  
    ctx.moveTo(px, py); // from

    ctx.lineTo(cx, cy); // to
    px=cx
    py=cy
    cx=e.clientX-offsetX
        cy=e.clientY-offsetY
    ctx.stroke(); // draw it!
})
board.addEventListener('mousedown', e=>{
    console.log(cx)
    px=cx
    py=cy
    cx=e.clientX
    cy=e.clientY
})

