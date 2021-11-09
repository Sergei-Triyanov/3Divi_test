// function start and end render markup
const startRenderElement = (ctx:any) => ctx.beginPath()
const endRenderElement = (ctx:any) => ctx.closePath()

const creatingLabelY = (ctx:any, label:string, startY:number = 0, startX:number = 0 , style:string) => {
    ctx.font = style
    ctx.textAlign = 'right'
    const checkLengthDataText = (text:string) => {
        if (text.length > 3) {
            let textStr =  text.split('');
            return `${textStr[0]}, ${textStr.slice(1, 4).join('')}*10^${text.length - 3}`
        }
        return text
    }
    ctx.fillText(checkLengthDataText(label), startX, startY)

}

const renderRow = ( ctx:any, y:number, x:number,  height:number, width:number, color:string):void => {
        ctx.fillStyle = color ? color : 'FFA500'
        ctx.fillRect(y, x, height, width);  
}

export const creatingCanvasSize = ( ctx:any, width:number, height:number):void => {

    const createSizeCanvas = (ctx:any, width:number, height:number):void => {
        ctx.style.width = `${width}px`
        ctx.style.height = `${height}px`
    }
    
    const createPixelCanvas = (ctx:any, width:number, height:number):void => {
        ctx.width = width * 2
        ctx.height = height * 2
    }

    createSizeCanvas(ctx, width, height)
    createPixelCanvas(ctx, width, height)
}

export const creatingAxisY = (ctx:any, colum:number = 5, labelY:string[], step:number, startY:number, startX:number, style:string ='26px Roboto'):void => {
    startRenderElement(ctx)
    // creating row
    let j = 0;
    for (let i = labelY.length; i > 0; i--){
        creatingLabelY(ctx, labelY[i-1], startY + j*step, startX, style)
        j++
    }
    // creating colum
    endRenderElement(ctx)
}

export const creatingNet = (ctx:any, x:number, y:number, step:number, width:number, heightLine:number) => {
    for(let i = 0; i < 7; i++) {
        ctx!.moveTo(y, x + i*step + width/2)
        ctx!.lineTo(heightLine, x + i*step + width/2)
    }
}
export const creatingRowData = (ctx:any, dataRow:number[][], x:number, y:number, step:number, maxHeight:number, maxViews:number, width:number, colors:string[]):void => {
    startRenderElement(ctx)

    for (let i = 0; i < dataRow.length; i++) {
        let heightItem = 0
        for (let j = 0; j < dataRow[i].length; j++) {
            const height = ( maxHeight - 2*j) * (dataRow[i][j]/maxViews)
            renderRow(ctx, y + heightItem , x+step*i, height, width, colors[j])
            heightItem = height + 2*j 
        }
    }
    endRenderElement(ctx)
}

export const renderLabel = (ctx:any,  label:string[],  x:number, y:number, step:number, style:string):void => {
    ctx.font = style
    ctx.textAlign = 'center'
    for (let i = 0; i < label.length; i++) {
        ctx.fillText(label[i], x + (i *step), y)
    }
}

export const createAxisX = (ctx:any, x:number = 0,  y:number = 0, lineWidth:number = 2):void => {
    ctx.lineWidth = lineWidth
    ctx.moveTo( -y - 2, 0 + Math.floor(x * 0.23)) 
    ctx.lineTo( -y - 2, x * 2)
}