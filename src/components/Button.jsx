import style from './Button.module.css'

export default function Button({label, type, onClick, styles}){
    return(
        <button className={style.button} type={type} onClick={onClick}>{label}</button>
    )
}