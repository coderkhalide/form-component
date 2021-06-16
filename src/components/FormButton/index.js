import './style.css'

function FormButton({ title, onCLick, disable = true }) {
    return (
        <button className="formButton" onClick={onCLick} disabled={disable} >{title}</button>
    )
}

export default FormButton
