import Image from 'next/image'
import GameOfLife from './GameOfLife'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <GameOfLife height={20} width={20}/>
      </div>
    </main>
  )
}
