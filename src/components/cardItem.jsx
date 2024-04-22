import { useState } from "react"
import heart from "../assets/heartfav.svg"
import heartVazio from "../assets/heart.svg"

 
// eslint-disable-next-line react/prop-types
export const CardItem = ({nome,preco, precoAtual, divisao, imagem, desconto}) => {
    const [like, setLike] = useState(false)
    return ( 
    <div className="relative w-[277px]">
        <div className="relative group">
            <img src={imagem} alt={nome}/>
            <div className="absolute bottom-0 bg-[#E7EAE140] border-t-[1px] border-[#D3D3D3] w-full hidden group-hover:block">
                <p className="text-center text-xs text-[#161616] my-2">Selecione um tamanho</p>
                <ul className="flex gap-2 justify-center mb-2">
                    <li className="py-[6px] px-[7px] text-xs text-gray1 bg-white border-[#D3D3D3] border-[1px] hover:bg-pink hover:text-white">34</li>
                    <li className="py-[6px] px-[7px] text-xs text-gray1 bg-white border-[#D3D3D3] border-[1px] hover:bg-pink hover:text-white">35</li>
                    <li className="py-[6px] px-[7px] text-xs text-gray1 bg-white border-[#D3D3D3] border-[1px] hover:bg-pink hover:text-white">36</li>
                    <li className="py-[6px] px-[7px] text-xs text-gray1 bg-white border-[#D3D3D3] border-[1px] hover:bg-pink hover:text-white">37</li>
                    <li className="py-[6px] px-[7px] text-xs text-gray1 bg-white border-[#D3D3D3] border-[1px] hover:bg-pink hover:text-white">38</li>
                </ul>
                <button className="text-white bg-pink py-[7px] w-full ">Adicionar à sacola</button>
            </div>
        </div>
        <p className="mt-[12px] text-[12px] text-gray1">{nome}</p>
        <div className="mt-[16px]"><span className="text-gray1">{precoAtual}</span> <span className="text-[14px] text-gray-text line-through">{preco}</span></div>
        <p className="text-[12px] text-gray1 mt-1">{divisao}</p>
        <img className="absolute right-[13px] top-[14px]" src={like? heart : heartVazio} alt="coração de favoritar" onClick={()=>setLike(!like)}/>
        <span className="absolute left-[13px] top-[14px] text-[10px] text-center bg-pink py-[6px] w-[65px] text-white">{desconto}</span>
    </div>
    )
}