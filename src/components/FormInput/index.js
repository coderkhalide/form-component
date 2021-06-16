import './style.css'

function FormInput({ onChange, value, ...otherProps }) {
    return (
        <div className="formInput">
            <input
                type="text"
                onChange={(e) => onChange(e.target.value)}
                value={value}
                {...otherProps} 
            />
        </div>
    )
}

export default FormInput
