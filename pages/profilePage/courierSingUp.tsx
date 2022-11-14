import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Courier SingUp</title>
				<meta name="description" content="Courier sing up page/"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<a href="../">
						<button className={styles.button}>&larr;</button>
					</a>
				</div>

				<form method="POST" action="http://localhost:3000/api">
           			<input type="text" id="name" name="name" placeholder="Nome" required/>
           			<input type="text" id="lastname" name="lastname" placeholder="Sobrenome" required/>
           			<input type="text" id="email" name="email" placeholder="E-mail" required/>
           			<input type="text" id="tel" name="tel" placeholder="Telefone" required/>
           			<input type="text" id="pix" name="pix" placeholder="Pix" required/>
           			<input type="text" id="address" name="address" placeholder="Favela de Atua&ccedil;&atilde;o" required/>
           			<input type="text" id="cpf" name="cpf" placeholder="CPF" required/>
           			<input type="text" id="vehicleModel" name="vehicleModel" placeholder="Modelo da Moto" required/>
           			<input type="text" id="vehiclePlate" name="vehiclePlate" placeholder="Placa da Moto" required/>
           			<button type="submit">CADASTRAR</button>
					
				</form>
			</main>
		</div>
	)
}
