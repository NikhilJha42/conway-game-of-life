"use client";

import "./game-of-life.css";
import { useState } from "react";
export default function GameOfLife({ height, width }: any) {
  const initalConfig: any = [];
  for (let i = 0; i < height; i++) {
    initalConfig.push([]);
    for (let j = 0; j < width; j++) {
      initalConfig[i].push(false);
    }
  }
  const [config, setConfig] : any = useState(initalConfig);

  const [display, setDisplay] : any = useState(0);

  function updateDisplay() {
    let counter : number = 0;
    for(let i=0; i < height; i++){
        for(let j = 0; j < width; j++) {
            if(config[i][j]){
                counter++;
            }
        }
    }
    setDisplay(counter);
  }
  function updateConfig(l: any, k: any, input: any) {

    config[l][k] = input;
    setConfig(config);

    updateDisplay();
  }


  return (
    <div>
      <GameTable
        updateConfig={updateConfig}
        activeStates={config}
        height={height}
        width={width}
      />
      {/* <PlayButton updateConfig={updateConfig}/> */}
      <p>{display}</p>
    </div>
  );
}

function PlayButton({ updateConfig }: any) {
  return <button onClick={() => updateConfig(0, 0, 1)}>Play</button>;
}

function GameTable({ height, width, activeStates, updateConfig }: any) {
  const rows = [];
  for (let i = 0; i < height; i++) {
    rows.push(
      <GameRow
        rowNum={i}
        rowLen={width}
        activeStates={activeStates[i]}
        updateConfig={updateConfig}
      />
    );
  }
  return (
    <table className="game-of-life">
      <tbody>{rows}</tbody>
    </table>
  );
}

function GameRow({ rowNum, rowLen, activeStates, updateConfig }: any) {
  const cells = [];
  for (let i = 0; i < rowLen; i++) {
    const cellId = "R" + rowNum + "C" + i;
    cells.push(
      <Cell
        id={cellId}
        position={[rowNum, i]}
        activeState={activeStates[i]}
        updateConfig={updateConfig}
      />
    );
  }
  return <tr>{cells}</tr>;
}

function Cell({ id, position, activeState, updateConfig }: any) {
  const [state, setState] = useState(activeState);
  const activeClass = state ? " " + "active" : "";

  function handleClick() {
    const newState : boolean = !state;
    setState(newState);
    updateConfig(...position, newState);
  }
  return (
    <td className={"cell" + activeClass} id={id} onClick={() => handleClick()}>
      <input type="radio" />
    </td>
  );
}
