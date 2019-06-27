import Link from 'next/link';

const Navbar = () => (
  <div className='topnav'>
    <Link href="/"><a>Home</a></Link>
    <Link href="/search"><a>Nova Consulta</a></Link>
    <Link href="/saved"><a>Consultas Salvas</a></Link>
  </div>
);

export default Navbar;
