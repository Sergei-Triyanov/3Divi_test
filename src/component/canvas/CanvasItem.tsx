import React from 'react'
import { creatingAxisY, creatingRowData, creatingCanvasSize, createAxisX, renderLabel, creatingNet } from './creatingCanvasElement'

interface ICanvasTable {
    canvas: {
        width: number,
        height: number,
        bg?: string,
        row: {
            maxViews: number,
            labelX: string[],
            data: any[][],
            colors: string[]
        },
        colum: {
            labelY: string[]
        }
    }
}

const CanvasItem:React.FC<ICanvasTable> = ({ canvas }) => {
    
    const paddingHeigth = Math.floor(canvas.height*0.05)

    const maxHeightRow = (canvas.height*2 - (canvas.height*0.45))  
    
    let canvasRef = React.useRef<HTMLCanvasElement | null>(null)
    let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null) 

    const style = `26px Roboto`

    const rowStateInitial = {
        x: 0 + Math.floor(canvas.width * 0.25),
        y: canvas.height*2 - Math.floor(canvas.height*0.12),
        step: (canvas.width * 2 - 100) / 7,
        stepAxisY: (canvas.height * 2 - paddingHeigth)/5
    }
    
    React.useEffect(()=>{
        if (canvasRef.current) {
            let canvasCurrent = canvasRef.current
            // стилистический размер окна canvas
            // количество пикселей внутри canvas
            creatingCanvasSize(canvasCurrent, canvas.width, canvas.height)

            let ctx = canvasCtxRef.current
            ctx = canvasRef.current.getContext('2d');
                
            ctx!.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            ctx!.save()
            ctx!.beginPath()
            ctx!.translate(0, canvas.height * 2 )
            ctx!.rotate(-Math.PI/2);
         
            for (let i = 0; i < 5; i++) {
                createAxisX(ctx!, canvas.width, (rowStateInitial.y - canvas.height*2)-(rowStateInitial.stepAxisY*i), 1)
            }
            ctx!.stroke()
            ctx!.closePath()
            ctx!.beginPath()
            creatingNet(ctx!, rowStateInitial.x, -rowStateInitial.y + canvas.height*2,  rowStateInitial.step, 80, (canvas.height*2 - (canvas.height*0.32)))
            ctx!.stroke()
            ctx!.closePath()
            ctx!.restore()
            creatingAxisY(ctx!, 5, canvas.colum.labelY, (canvas.height*2 - paddingHeigth)/5,  canvas.height/3, 120)
            ctx!.save()
            ctx!.translate(0, canvas.height * 2 )
            ctx!.rotate(-Math.PI/2);
        
            creatingRowData(ctx!, canvas.row.data, rowStateInitial.x, -rowStateInitial.y + canvas.height*2, rowStateInitial.step, maxHeightRow, canvas.row.maxViews, 80, canvas.row.colors)
            
            ctx!.restore();
            renderLabel(ctx!, canvas.row.labelX, rowStateInitial.x+40, canvas.height*2,  rowStateInitial.step, style)
            ctx!.stroke()
            ctx!.closePath()

        }
    },)

    return(
        <canvas className='canvas' ref={canvasRef} /> 
    )
}

export default CanvasItem;