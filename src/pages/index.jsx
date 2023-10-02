import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer'
import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { useCallback } from 'react';

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(123);
// }

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <a
        href='/about'
        onClick={handleClick}
      >
        ボタン
      </a>

      <Main page='index' />

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
