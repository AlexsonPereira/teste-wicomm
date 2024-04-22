import { Header } from "./components/header"
import imagem1 from "./assets/image1.png"
import imagem2 from "./assets/image2.png"
import imagem3 from "./assets/image3.png"
import frete from "./assets/Group1849.svg"
import cupom from "./assets/Group 1852.svg"
import pix from "./assets/Group 1854.svg"
import cartao from "./assets/Group 1856.svg"
import bolsa from "./assets/image 19.png"
import sapato from "./assets/image 20.png"
import rasteira from "./assets/image 21.png"
import plataforma from "./assets/image 22.png"
import botas from "./assets/image 23.png"
import sapatilhas from "./assets/image 24.png"
import mulhercarrinho from "./assets/Rectangle79.png"
import arrow from "./assets/arrow.svg"
import arrow2 from "./assets/arrow2.svg"
import rebirkens from "./assets/image 16.png"
import sandalia from "./assets/image 12.png"
import tenis from "./assets/image 14.png"
import imageTwoGirls from "./assets/image 15.png"
import banner from "./assets/image 52.png"
import girlInStadium from "./assets/image 53.png"
import { CardItem } from "./components/cardItem"
import { Footer } from "./components/footer"
import plataformaCard from "./assets/image 8.png"
import sapatilhaCard from "./assets/image 7.png"
import sandaliaCard from "./assets/image 6.png"
import tenisCard from "./assets/image 5.png"
import arrow3 from "./assets/Group 1850.svg"


export const App = () => {
  return (
    <main>
      <Header/>
      <section className="relative z-0">
        <div className="flex w-full">
          <img className="w-[50%]" src={imagem1} alt="imagem mulher" />
          <img className="w-[50%]" src={imagem3} alt="imagem mulher" />
        </div>
        <img className="absolute right-[36px] top-[320px] cursor-pointer" src={arrow3} alt="" />
        <img className="absolute left-[36px] top-[320px] scale-[-1] cursor-pointer" src={arrow3} alt="" />
        <section className="absolute top-[117px] inset-x-0">
          <div className="flex items-center flex-col">
            <div className="w-[412px] flex justify-between px-6 py-4 bg-white">
              <span className="text-2xl text-gray1">#SuperBazar</span>
              <p className="text-sm">até <span className="font-bold text-2xl text-pink">50%OFF</span></p>
            </div>
            <img src={imagem2} alt="Imagem Sandalia"/>
            <button className="bg-pink text-white font-normal py-[14px] px-[48px] relative bottom-6">Conferir</button>
          </div>
        </section>
        <div className="w-full h-[109px] bg-gradient2 absolute bottom-0 left-0"></div>
      </section>
      <section className="bg-gray2 flex justify-center py-[32px]">
        <ul className="flex gap-[97px] text-gray1">
          <li className="flex items-center gap-[10px]">
            <img src={frete} alt="simbolo de frete" />
            <p>Frete Grátis p/ Sudeste</p>
          </li>
          <li className="flex items-center gap-[10px]">
            <img src={cupom} alt="Cupom" />
            <p>R$ 20 off na 1º compra</p>
          </li>
          <li className="flex items-center gap-[10px]">
            <img src={pix} alt="Pix" /> 
            <p>Pague via PIX</p>
          </li>
          <li className="flex items-center gap-[10px]">
            <img src={cartao} alt="Cartão" />
            <p>Parcele em até 6x sem juros</p>
          </li>
        </ul>
      </section>
      <section>
        <p className="text-gray1 text-2xl text-center mt-[72px] mb-[32px]">
          Compre por categoria
        </p>
        <ul className="flex gap-[36px] justify-center text-gray1">
          <li className="flex flex-col items-center gap-[14px] mb-[86px]">
            <img src={bolsa} alt="Bolsas" />
            <p>Bolsas</p>
          </li>
          <li className="flex flex-col items-center gap-[14px]">
            <img src={sapato} alt="Tênis" />
            <p>Tênis</p>
          </li>
          <li className="flex flex-col items-center gap-[14px]">
            <img src={rasteira} alt="Rasteiras" />
            <p>Rasteiras</p>
          </li>
          <li className="flex flex-col items-center gap-[14px]">
            <img src={plataforma} alt="Plataformas" />
            <p>Plataformas</p>
          </li>
          <li className="flex flex-col items-center gap-[14px]">
            <img src={botas} alt="Botas" />
            <p>Botas</p>
          </li>
          <li className="flex flex-col items-center gap-[14px]">
            <img src={sapatilhas} alt="Sapatilhas" />
            <p>Sapatilhas</p>
          </li>
        </ul>
      </section>
      <section className="bg-gray2 flex py-[32px] px-[155px] justify-between">
        <div className="">
          <div className="flex gap-3 mt-8">
            <div className="w-[151px] h-1 bg-gradient-load"></div>
            <div className="w-[151px] h-1 bg-white"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] text-gray1 mb-[16px] mt-[56px]">Pra brilhar no verão</h3>
            <p className="text-[12px] mb-[32px] w-[273px] ">As Sandálias Birkens são uma escolha de calçado atemporal e icônica, conhecida por seu conforto, qualidade e design diferenciado.</p>
            <button className="bg-pink text-white font-normal py-[14px] px-[24px] relative bottom-6 w-[158px] mt-[32px]">É a minha cara</button>
          </div>
        </div>
         <img src={mulhercarrinho} alt="mulher em um carrinho de compras"/>
      </section>
      <section>
        <p className="mt-[72px] text-center text-[24px] text-gray1 mb-[24px]">Favoritos da Semana</p>
        <div className="relative ">
          <ul className="flex gap-5 justify-center mb-[104px]">
            <CardItem nome="Tênis Clean Urbano - Branco" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={tenisCard} desconto="36% OFF"/>
            <CardItem nome="Sandália Soft Metalizado - Preta" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={sandaliaCard} desconto="36% OFF"/>
            <CardItem nome="Sapatilha Elegance - Rose" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={sapatilhaCard} desconto="36% OFF"/>
            <CardItem nome="Plataforma em Nobuck - Whisky" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={plataformaCard} desconto="36% OFF"/>
          </ul>
          <img className="absolute right-[36px]  bottom-[192px] cursor-pointer" src={arrow3} alt="" />
          <img className="absolute left-[36px] bottom-[192px] scale-[-1] cursor-pointer" src={arrow3} alt="" />
        </div>
      </section>
      <section className="bg-gray2 pt-10 pb-[54px] flex gap-5 justify-center">
        <div className="w-fit">
          <p className="text-xl text-gray1 mb-2">Rasteiras &  Birkens</p>
          <p className="w-[228px] text-xs mb-6">
            A categoria de Sandália Rasteira da Sapatella é um verdadeiro paraíso para os amantes de conforto e estilo.
          </p>
          <p className="flex mb-6 items-center gap-4">Eu quero <img src={arrow} alt="seta para rasteiras e birkens" /></p>
          <img src={rebirkens} alt="Rebirkens" />
        </div>
        <div className="w-fit">
          <img src={sandalia} alt="Sandalias" />
          <p className="mt-[26px] flex items-center gap-4">Sandálias<img src={arrow} alt="seta para rasteiras e birkens" /></p>
        </div>
        <div className="w-fit">
          <img src={tenis} alt="Tenis" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl text-gray1 mb-2 mt-6">Tênis</p>
            <p className="w-[250px] text-xs text-gray1 mb-[38px]">Os tênis femininos se tornaram um item básico na moda e nos calçados do dia a dia.</p>
            <p className="flex items-center gap-4 text-gray1">Conferir <img src={arrow2} alt="Seta" /></p>
          </div>
        </div>
      </section>
      <section className="flex gap-[56px] items-center" >
        <img className="my-[72px]" src={imageTwoGirls} alt="Imagem de duas mulheres" />
        <div className="relative">
          <ul className="flex gap-5">
            <CardItem nome="Tênis Clean Urbano - Branco" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={tenisCard} desconto="36% OFF"/>
            <CardItem nome="Sandália Soft Metalizado - Preta" preco="R$ 209,90" precoAtual="RS 169,90" divisao="ou 6x de R$ 28,31 sem juros" imagem={sandaliaCard} desconto="36% OFF"/>
          </ul>
          <img className="absolute right-[-24px]  bottom-[192px] cursor-pointer" src={arrow3} alt="" />
          <img className="absolute left-[-24px] bottom-[192px] scale-[-1] cursor-pointer" src={arrow3} alt="" />
        </div>
      </section>
      <section>
        <img className="w-full" src={banner} alt="Banner de duas mulheres" />
      </section>
      <section className="flex justify-center items-center py-[72px]">
        <div className="mr-[133px]">
          <h3 className="text-2xl text-gray1">Sobre a Sapatella</h3>
          <p className="w-[461px] text-gray1">
          Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Aqui tem atenção de verdade, produtos com o seu jeito e ritmo. Chega mais, fique à vontade. Queremos ver você confortável e livre para ser como quiser e ocupar o espaço que bem entender. O que nos une e contagia é a vontade de brilhar e ser feliz. Mais que mulheres, somos amigas. Sapatella. Vamos juntas?
          </p>
        </div>
        <img className="shadow-shadow-img" src={girlInStadium} alt="Mulher em um estadio" />
      </section>
      <section className="bg-gray2 flex items-center flex-col py-[35px]">
        <p className="text-xl text-gray1">Cadastre-se e ganhe <span className="text-pink font-bold">R$20 OFF</span> na sua primeira compra!</p>
        <div className="flex gap-5 mt-[13px]">
          <input placeholder="Nome" className="w-[277px] h-10 bg-white py-[11px] px-[12px] focus:outline-none border-[1px] border-black placeholder:text-gray-text" type="text" />
          <input placeholder="Email" className="w-[277px] h-10 bg-white py-[11px] px-[12px] focus:outline-none border-[1px] border-black placeholder:text-gray-text" type="text" />
          <button className="bg-pink text-white w-[178px]">Cadastrar</button>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

