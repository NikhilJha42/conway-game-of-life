import GameOfLife from './GameOfLife'
import Header from './Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Header 
          title={"Conway's Game of Life Simulator"} 
          description={`
            Use this simulator to observe the beatuiful patterns 
            that arise from an initial configuration of live cells 
            - simply click to activate or deactivate the cells. 
            Then watch your still lifes remain still, 
            oscillators oscillate, and spaceships fly!
          `}/>
        <GameOfLife height={20} width={20}/>
      </div>
    </main>
  )
}
