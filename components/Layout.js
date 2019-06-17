import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import './style.css';

const Layout = props => (
  <div>
    <Head>
      <title>Consultas à tabela FIPE</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Header />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
