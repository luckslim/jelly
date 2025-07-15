import { Button } from "../button";
import { ContainerDescription, ContainerPulseCoins } from "./style";
import imglogo from "../../../../assets/images/jellyfish.png"
import Image from "next/image";
import { ArrowFatLineRightIcon, CoinsIcon } from "@phosphor-icons/react";
import { FormatMoney } from "@/app/utils/FormatMoney";
export function BuyPulseCoins() {
    return (
        <>
            <ContainerPulseCoins>
                <ContainerDescription>
                    <h3>Pulse Coins <Image src={imglogo} width={40} alt="" /></h3>
                    <p>Quantidade<ArrowFatLineRightIcon size={22} weight="fill" /> <span>1000 <CoinsIcon color="#efff5e" size={22} weight="fill" /></span></p>
                </ContainerDescription>
                <Button title={FormatMoney.format(50)} type="SECONDARY" />
            </ContainerPulseCoins>
        </>
    )
}