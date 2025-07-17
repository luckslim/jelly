"use client";
import {
  Container,
  ContainerBackground,
  ContainerImage,
  ContainerLoginBox,
} from "./style";
import BackgroundImage from "../../../assets/images/90595.jpg";
import LogoImage from "../../../assets/images/jellyfish.png"
import Google from "../../../assets/images/google.png"
import Github from "../../../assets/images/github.png"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const route = useRouter();
  function handleLogin(){
    
    route.push("/HomePage");
    return "HomePage"
  }
  return (
    <>
      <Container>
        <ContainerBackground>
          <ContainerImage src={BackgroundImage} alt="background" />
        </ContainerBackground>
        <ContainerLoginBox>
          <div>
            <section>
              <span>
                <h1>Pulse</h1>
                <Image src={LogoImage} alt="" width={60}/>
              </span>
              <p>Pulse your Development</p>
            </section>
            <nav>
              <form action="">
                <input type="text" placeholder="Digite seu Nome de Usuário" />
                <input type="text" placeholder="Digite sua Senha"/>
                <button onClick={handleLogin}>Login</button>
                Faça Login com Google e Github:
              </form>
              <button><Image src={Google} width={30} alt=""/>Google</button>
              <button > <Image src={Github} width={30} alt=""/>Github</button>
              <span>
                Ainda não é inscrito?
                <button>Crie Sua Conta</button>
              </span>
            </nav>
          </div>
        </ContainerLoginBox>
      </Container>
    </>
  );
}
