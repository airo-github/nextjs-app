import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer'
import { Main } from '../components/Main';
import { Header } from '../components/Header';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';
import { useInputArray } from 'src/hooks/useInputArray';
import { useCoutnter } from 'src/hooks/useCoutnter';

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCoutnter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBgLightBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? '非表示' : '表示'}
      </button>

      <input type='text' value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>

      <Main page='about' />

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
