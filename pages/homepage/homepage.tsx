import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Profile Selection</title>
				<meta name="description" content="Select profile"/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Selecione o seu perfil
				</h1>

				<div className={styles.grid}>
					<div clasName={styles.card}>
						<a href="../profilePage/courierSingUp.tsx" className={styles.title}>
							<h2>Entregador</h2>
						</a>
					</div>

					<div className={styles.card}>
						<div className={styles.card}>
							<a href="../profilePage/retailSingUp.tsx" className={styles.title}>
								<h2>Comerciante</h2>
							</a>
						</div>
					</div>
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
