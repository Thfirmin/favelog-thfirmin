import Head from 'next/head'
import Image from 'next/image'
import larrw from '../../img/leftArrow.png'
import profilePic from '../../img/profilePic.svg'
import styles from '../../styles/Home.module.css'
import profile from '../../styles/Profile.module.css'

export default function Home() {
    return (
        <div className={profile.container}>
            <Head>
                <title>Retail SingUp</title>
                <meta name="description" content="Retail sing up page"/>
				<link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={profile.main}>
                <header>
                    <a href="../" className={profile.back}>
                        <Image src={larrw} alt="Back Page"/>
                    </a>
                </header>

                <div className={profile.profilePic}>
                    <span className={profile.dot}><Image src={profilePic} alt="img icon"/></span>
                </div>

                <form method="POST" action="http://localhost:3000">
                    <div className={profile.form}>
                        <div className={profile.name}>
                            <input type="text" id="name" name="name" placeholder="Nome" required/>
                            <input type="text" id="lastname" name="lastname" placeholder="Sobrenome" required/>
                        </div>
                        <div className={profile.email}>
                            <input type="text" id="email" name="email" placeholder="E-mail" required/>
                        </div>
                        <div className={profile.count}>
                            <input type="text" id="tel" name="tel" placeholder="Telefone" required/>
                            <input type="text" id="pix" name="pix" placeholder="Pix" required/>
                        </div>
                        <div className={profile.address}>
                            <input type="text" id="address" name="address" placeholder="Favela de Atua&ccedil;&atilde;o" required/>
                        </div>
                        <div className={profile.cpf}>
                            <input type="text" id="cpf" name="cpf" placeholder="CPF" required/>
                        </div>
                        <div className={profile.submition}>
                            <button type="submit">CADASTRAR</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}