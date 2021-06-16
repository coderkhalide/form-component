import Select from 'react-select'
import './style.css'

function FormDropdown({ options, onChange, placeholder, ...rest }) {
    return (
        <div className="formDropdown">
            <Select 
                options={options} 
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}

export default FormDropdown
