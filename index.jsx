import Head from 'next/head'
import dynamic from 'next/dynamic'

const Vacaciones2025App = dynamic(() => import('../components/Vacaciones2025App'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Calendario Vacaciones 2025</title>
      </Head>
      <main>
        <Vacaciones2025App />
      </main>
    </>
  );
}
