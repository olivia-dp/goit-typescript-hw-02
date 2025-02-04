
import s from "./ImageCard.module.css"


const ImageCard = ({ src, alt, onClick }) => {
    return (
        <div className={s.container} onClick={onClick}>
            <img src={src} alt={alt} className={s.image}/>
        </div>

    )
}


export default ImageCard;