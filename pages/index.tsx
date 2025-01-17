import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Profile Selection</title>
				<meta name="description" content="Select profile"/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Qual seu tipo de cadastro?
				</h1>

				<div className={styles.grid}>
					<a href="../profilePage/retailSingUp" className={styles.card}>
						<h2>Empreendedor</h2>
					</a>

					<a href="../profilePage/courierSingUp" className={styles.card}>
						<h2>Mototaxi</h2>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
