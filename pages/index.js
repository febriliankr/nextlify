import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "./form";
import axios from 'axios';
import ExampleHookForm from "./examplehookform";


export default function Home() {


  const handleClick = e => {
    axios.get(`/api/hello`)
    .then(res => {
      console.log('res', res)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Nodemailer App | Febrilian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Trying to build{" "}
          <a href="https://nextjsmailer.netlify.app/">Nodemailer</a>
        </h1>
        <p className={styles.description}>
          With <code onClick={handleClick} className={styles.code}>Next.js</code>, <code className={styles.code}>Nodemailer</code> and <code className={styles.code}>Netlify Lambda Functions</code>
        </p>

        <Form/>
        <ExampleHookForm/>
      </main>

      <p className={styles.description}>
        POST request to <code className={styles.code}>/api/test</code>
      </p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
