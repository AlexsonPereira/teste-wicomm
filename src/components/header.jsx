import logo from "../assets/logo_ SAPATELLA_branca1.svg"
import user from "../assets/user.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/shopping-cart.svg"
import search from "../assets/search.svg"


export const Header = () => {
    return (
        <header className="bg-gradient fixed w-full z-10">
        <div className="w-[1168px] mx-auto flex justify-between items-center">
            <img src={logo} alt="Logo Sapatella"/>
            <ul className="flex my-[20px] gap-[24px] text-white">
                <li className="cursor-pointer">Novidades</li>
                <li className="cursor-pointer">Sapatos</li>
                <li className="cursor-pointer">Sandalias</li>
                <li className="cursor-pointer">Tênis</li>
                <li className="cursor-pointer">Bolsas & Acessórios</li>
                <li className="font-bold cursor-pointer">OFF</li>
            </ul>
            <div className="flex gap-6 items-center">
                <div className="flex items-center relative">
                    <input className="w-[232px] h-10 bg-[#FFFFFF30] placeholder:text-[#D3D3D3] focus:outline-none px-3 border border-[#D3D3D3]" type="text" placeholder="Buscar"/>
                    <img className="w-[24px] h-[24px] absolute right-3" src={search} alt="Icone Pesquisa" />
                </div>
                <img className="w-[24px] h-[24px] cursor-pointer" src={user} alt="Icone Usuario Perfil" />
                <img className="w-[24px] h-[24px] cursor-pointer" src={heart} alt="Icone de favoritos" />
                <div className="relative">
                    <img className="w-[24px] h-[24px] cursor-pointer" src={cart} alt="Icone carrinho" />
                    <span className="absolute top-0 -right-[8px] text-[10px] bg-pink rounded-full w-[15px] text-center text-white">0</span>
                </div>
            </div>
        </div>
    </header>

    )
        
}