import { MouseEvent } from "react";

import s from "./ImageCard.module.css"

type ImageCardProps = {
    src: string,
    alt: string,
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const ImageCard = ({ src, alt, onClick }: ImageCardProps) => {
    return (
        <div className={s.container} onClick={onClick}>
            <img src={src} alt={alt} className={s.image}/>
        </div>

    )
}


export default ImageCard;