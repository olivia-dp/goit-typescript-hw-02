import { MouseEvent } from "react"
import s from "./LoadMoreBtn.module.css"


type LoadMoreBtnProps = {
    handleChangePage: (event: MouseEvent<HTMLButtonElement>) => void
}

const LoadMoreBtn = ({handleChangePage}: LoadMoreBtnProps) => {
    return (
        <button onClick={handleChangePage} className={s.loadBtn}>Load more</button>
    )
}

export default LoadMoreBtn;