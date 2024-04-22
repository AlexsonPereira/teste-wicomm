import logoSapatella from "../assets/logo_SAPATELLA_preto 1.png"
import logoF from "../assets/LFacebook.svg"
import logoW from "../assets/LWhatsapp.svg"
import logoI from "../assets/LInstagram.svg"
import visa from "../assets/Group 158.svg"
import master from "../assets/Group 141.svg"
import hiper from "../assets/Group 161.svg"
import pix from "../assets/Group 743.svg"
import amex from "../assets/Group 147.svg"
import elo from "../assets/Group 144.svg"
import boleto from "../assets/Group 742.svg"
import vtexcer from "../assets/image 27.svg"
import lets from "../assets/Group 830.svg"
import wicomm from "../assets/Logo_Wicomm_WhiteBlue 1.svg"
import vtex from "../assets/VTEX_pink_RGB.svg"



export const Footer = () => {
    return (
    <footer className="pt-[48px] pb-[32px]">
        <section className="flex gap-[127px] justify-center mb-[48px]">
            <div className="flex flex-col w-fit gap-[36px]">
                <img src={logoSapatella} alt="" />
                <div className="flex gap-[34px]">
                    <img src={logoI} alt="" />
                    <img src={logoW} alt="" />
                    <img src={logoF} alt="" />
                </div>
            </div>
            <div className="flex gap-[60px]">
                <div className="text-gray1">
                    <h3 >SOBRE NÓS</h3>
                    <ul className="text-sm mt-5 flex flex-col gap-[14px]">
                        <li>Quem somos</li>
                        <li>Mapa do site</li>
                        <li>Casas Sapatella</li>
                        <li>Seja um parceiro</li>
                        <li>Seja um Franqueado</li>
                        <li>Seja um afiliado</li>
                        <li>Trabalhe com a gente</li>
                    </ul>
                </div>
                <div className="text-gray1">
                    <h3>MINHA CONTA</h3>
                    <ul className="text-sm mt-5 flex flex-col gap-[14px]">
                        <li>Meus Dados</li>
                        <li>Meus Pedidos</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="text-gray1">
                    <h3>SUPORTE E POLÍTICAS</h3>
                    <ul className="text-sm mt-5 flex flex-col gap-[14px]">
                        <li>Trocas e Devoluções</li>
                        <li>Dúvidas Frequentes</li>
                        <li>Fale Conosco</li>
                        <li>Super Natal</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3>FORMAS DE PAGAMENTO</h3>
                        <div className="mt-5">
                            <div className="flex gap-2">
                                <img src={visa} alt="" />
                                <img src={master} alt="" />
                                <img src={hiper} alt="" />
                                <img src={pix} alt="" />
                            </div>
                            <div className="flex gap-2 mt-2">
                                <img src={amex} alt="" />
                                <img src={elo} alt="" />
                                <img src={boleto} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[48px]">
                        <h3>SEGURANÇA</h3>
                        <div className="flex mt-5 gap-4">
                            <img src={vtexcer} alt="" />
                            <img src={lets} alt="Certificado Lets" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section className="text-center text-xs text-gray1 pt-[32px] border-t-[1px] border-black" >
            <p>Somos Sonho LTA - Estrada do Campo D`areia, 182 - Pechincha - Rio de Janeiro/RJ - CEP: 22.743-310</p>
            <p>CNPJ:28.445.729/0081-75 | © 2024 Todos dos direitos reservados</p>
            <div className="flex justify-center gap-10 mt-6">
                <img src={wicomm} alt="logo Wicomm" /> 
                <img src={vtex} alt="Logo Vtex" />
            </div>
        </section>
    </footer>)
}