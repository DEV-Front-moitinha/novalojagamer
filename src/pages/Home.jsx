import GameCard from '../components/GameCard'
import JogoImg from '../assets/jogo01.jpg'
import PacMan from '../assets/jogo02.jpg'
import Xbox from '../assets/jogo03.jpg'
import GameOn from '../assets/jogo04.jpg'

const Home = () => {
  const games = [
    { id: 1, titulo: 'Jogo 1', preco: 'R$ 250', imagem: JogoImg },
    { id: 2, titulo: 'Jogo 2', preco: 'R$ 5', imagem: PacMan },
    { id: 3, titulo: 'Jogo 3', preco: 'R$ 120', imagem: Xbox },
    { id: 4, titulo: 'Jogo 4', preco: 'R$ 75', imagem: GameOn },
  ]

  return (
    <main className='px-[5%] mt-10 mb-16 grow'>
      <h2 className='text-3xl font-bold text-white mb-8'>Jogos em Destaque</h2>

      <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
        {games.map((game) => (
          <GameCard
            key={game.id}
            titulo={game.titulo}
            preco={game.preco}
            imagem={game.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
