import Link from 'next/link';

const Navbar = () => (
  <div className='topnav'>
    <Link href="/"><a>Home</a></Link>
    <Link href="/consulta"><a>Nova Consulta</a></Link>
    <Link href="/salvos"><a>Consultas Salvas</a></Link>
  </div>
);

export default Navbar;
