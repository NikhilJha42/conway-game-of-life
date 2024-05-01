"use client";

import "./game-of-life.css";
import { useState } from "react";
export default function GameOfLife({ height, width }: any) {
  const initalConfig: any = [];
  for (let i = 0; i < height; i++) {
    initalConfig.push([]);
    for (let j = 0; j < width; j++) {
      initalConfig[i].push("");
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

  function updateGameState() {
    const newConfig : any = [];
    for(let i=0; i<height; i++){
        newConfig.push([]);
        for(let j=0; j<width; j++){
            let counter : number = 0;
            for(let k=i-1; k<i+2; k++){
                for(let l=j-1; l<j+2; l++){
                    const isCurrentCell = k === i && l === j;
                    if(!isCurrentCell && typeof config[k] !== "undefined" && typeof config[k][l] !== "undefined" && config[k][l] === "active"){
                        counter++;
                    }
                }
            }
            if(counter < 2 || counter > 3){
                newConfig[i].push("");
            } else if(counter === 2){
                newConfig[i].push(config[i][j]);
            } else if(counter === 3) {
                newConfig[i].push("active");
            }
        }
    }
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            updateConfig(i, j, newConfig[i][j]);
        }
    }
    setConfig(newConfig);
  }

  const [intervalId, setIntervalId] : any = useState(null);

  function runGame(){
    setIntervalId(setInterval(updateGameState, 100));
  }

  function stopGame(interval: any) {
    clearInterval(interval);
    setConfig(initalConfig);
  }

  return (
    <div id="#game-of-life">
      <GameTable
        updateConfig={updateConfig}
        activeStates={config}
        height={height}
        width={width}
      />
      <GameButton name={'Play'} handleClick={runGame} inputs={[]}/>
      <GameButton name={'Clear'} handleClick={stopGame} inputs={[intervalId]}/>
      {/* <p>{display}</p> */}
    </div>
  );
}

function GameButton({name, handleClick, inputs}: any) {
  return <button className="game-button" onClick={() => handleClick(...inputs)}>{name}</button>;
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
  const activeClass = " " + activeState;

  function handleClick() {
    const newState : string = state ? "" : "active";
    setState(newState);
    updateConfig(...position, newState);
  }
  return (
    <td className={"cell" + activeClass} id={id} onClick={() => handleClick()}>
      <input type="radio" />
    </td>
  );
}
