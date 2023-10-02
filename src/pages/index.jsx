import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer'
import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';

    return () => {
      document.body.style.backgroundColor = '';
    }
  }, [])

  console.log(count);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>{count}</h1>

      <button onClick={handleClick}>ボタン</button>

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
    </div >
  );
}
