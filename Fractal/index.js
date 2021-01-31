 const canvas = document.querySelector('canvas');
 canvas.width = window.innerWidth
 canvas.height = window.innerHeight
 const ctx = canvas.getContext('2d')
 const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

 function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
     ctx.beginPath()
     ctx.save()
     ctx.strokeStyle = color1
     ctx.fillStyle = getRandomColor()
     ctx.lineWidth = branchWidth
     ctx.translate(startX, startY)
     ctx.rotate(angle * Math.PI/180)
     ctx.moveTo(0,0)
     ctx.lineTo(0, -len)
     ctx.stroke()

     if(len < 10) {
        ctx.beginPath()
        ctx.arc(0, -len, 10, 0, Math.PI/2)
        ctx.fill()
        ctx.restore()
        return
     }

     let randomAngle = Math.random() * 180

     
     drawTree(0, -len, len * 0.80, angle + 7, branchWidth)
     
     drawTree(0, -len, len * 0.80, angle - 7, branchWidth)

     ctx.restore()
 }

 drawTree(canvas.width/2, canvas.height - 80, 120, 0, 2, 'white')