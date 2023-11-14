import { Key } from 'react';
import './game-of-life.css'
export default function GameOfLife() {
    return (
        <div>
            <GameTable height={100} width={100}/>
        </div>
    )
}

function GameTable({height, width}: any) {
    const rows = [];
    for(let i=0; i < height; i++){
        rows.push(<GameRow rowNum={i} rowLen={width}/>)
    }
    return(
        <table className='game-of-life'>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function GameRow({rowNum, rowLen}:any) {
    const cells = [];
    for(let i=0; i < rowLen; i++){
        const cellId = "R" + rowNum + "C" + i;
        cells.push(<Cell id={cellId}/>)
    }
    return(
        <tr>{cells}</tr>
    )
}

function Cell({id}:any) {
    return(
        <td className="cell" id={id}></td>
    )
}