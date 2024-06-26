import GameOfLife from './GameOfLife'
import Header from './Header'

export default function Home() {
  return (
    <main>
      <div>
        <Header 
          title={"Conway's Game of Life Simulator"} 
          description={`
            Use this simulator to observe the beautiful patterns 
            that arise from an initial configuration of live cells 
            - simply click to activate or deactivate the cells, then 
            press play. Watch your still lifes remain still, 
            oscillators oscillate, and spaceships fly!
          `}/>
        <GameOfLife height={20} width={20}/>
      </div>
    </main>
  )
}
