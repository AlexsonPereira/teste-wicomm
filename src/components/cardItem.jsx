import { useState } from "react"
import image from "../assets/image 5.png"
import heart from "../assets/Vector.svg"
import heartVazio from "../assets/heart.svg"


export const CardItem = () => {
    const [like, setLike] = useState(false)
    return (
    <div className="relative w-[277px]">
        <div className="relative group">
            <img src={image} alt=""/>
            <div className="absolute bottom-0 bg-[#E7EAE140] border-t-[1px] border-[#D3D3D3] w-full hidden group-hover:block">
                <p className="text-center text-xs text-[#161616] my-2">Selecione um tamanho</p>
                <ul className="flex gap-2 justify-center mb-2">
                    <li className="py-[6px] px-[7px] text-xs text-[#4F4F4F] bg-white border-[#D3D3D3] border-[1px] hover:bg-[#CF215B] hover:text-white">34</li>
                    <li className="py-[6px] px-[7px] text-xs text-[#4F4F4F] bg-white border-[#D3D3D3] border-[1px] hover:bg-[#CF215B] hover:text-white">35</li>
                    <li className="py-[6px] px-[7px] text-xs text-[#4F4F4F] bg-white border-[#D3D3D3] border-[1px] hover:bg-[#CF215B] hover:text-white">36</li>
                    <li className="py-[6px] px-[7px] text-xs text-[#4F4F4F] bg-white border-[#D3D3D3] border-[1px] hover:bg-[#CF215B] hover:text-white">37</li>
                    <li className="py-[6px] px-[7px] text-xs text-[#4F4F4F] bg-white border-[#D3D3D3] border-[1px] hover:bg-[#CF215B] hover:text-white">38</li>
                </ul>
                <button className="text-white bg-[#CF215B] py-[7px] w-full ">Adicionar à sacola</button>
            </div>
        </div>
        <p className="mt-[12px] text-[12px] text-[#4F4F4F]">Tênis Clean Urbano - Branco</p>
        <div className="mt-[16px]"><span className="text-[#4F4F4F]">RS 169,90</span> <span className="text-[14px] text-[#B0B0B0] line-through">R$ 209,90</span></div>
        <p className="text-[12px] text-[#4F4F4F] mt-1">ou 6x de R$ 28,31 sem juros</p>
        <img className="absolute right-[13px] top-[14px]" src={like? heart : heartVazio} alt="coração de favoritar" onClick={()=>setLike(!like)}/>
        <span className="absolute left-[13px] top-[14px] text-[10px] text-center bg-[#CF215B] py-[6px] w-[65px] text-white">36% OFF</span>
    </div>
    )
}