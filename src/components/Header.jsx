import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-6 px-[5%] bg-[#0f172a] text-white'>
      <h1 className='logo p-2 text-[2rem] font-bold text-white cursor-pointer transition-all'>
        Loja <span className='text-blue-500 p-1'>Gamer</span>
      </h1>
      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to='/' className='text-white text-lg no-underline hover:text-blue-500 hover:uppercase transition-all'>Home</Link>
          </li>
          <li>
            <Link to='/jogos' className='text-white text-lg no-underline hover:text-blue-500 hover:uppercase transition-all'>Jogos</Link>
          </li>
          <li>
            <Link to='/contato' className='text-white text-lg no-underline hover:text-blue-500 hover:uppercase transition-all'>Contato</Link>
          </li>
          <li>
            <Link to='/login' className='text-white text-lg no-underline hover:text-blue-500 hover:uppercase transition-all'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header