import Head from 'next/head'
import Image from 'next/image'
import styles from '../../Home.module.css'

export default function Home() {]
	return (
		<div className={styles.container}>
			<Head>
				<title>Courier SingUp</title>
				<meta name="description" content="Courier sing up page/"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Cadastro do Entregador
				</h1>

				<form method="POST" action="http://localhost:3000">
					 <label for="Deliverer">Nome:</label>
           			<input type="text" id="Deliverer" name="Name" placeholder="Nome Sobrenome" required/>
           			 <label for="Deliverer">Email:</label>
           			 <input type="text" id="Deliverer" name="Email" placeholder="example@email.com" required/>
           			 <label for="Deliverer">CPF:</label>
           			 <input type="text" id="Deliverer" name="Cpf" placeholder="xxx.xxx.xxx-x" required/>
           			 <label for="Deliverer">Telefone:</label>
           			 <input type="text" id="Deliverer" name="Telphone" placeholder="(xx) xxxxx-xxxx" required/>
           			 <label for="Deliverer">Chave Pix:</label>
           			 <input type="text" id="Deliverer" name="Pix-key" placeholder="xxx" required/>
           			 <label for="Deliverer">Placa da Moto:</label>
           			 <input type="text" id="Deliverer" name="Bike-plate" placeholder="XXX-0X00" required/>
           			 <label for="Deliverer">Modelo da Moto:</label>
           			 <input type="text" id="Deliverer" name="Bike-model" placeholder="xxx" required/>
           			 <button type="submit">Enviar</button>
					
				</form>
			</main>
		</div>
	)
}
