import './style.css'
import FormInput from '../FormInput'
import { useState } from 'react'
import FormDropdown from '../FormDropdown'
import FormButton from '../FormButton'

const conditions = [
    {
        value: 'new', 
        label: 'New', 
    },
    {
        value: 'used', 
        label: 'Used', 
    },
    {
        value: 'broken', 
        label: 'Broken', 
    }
]

function DeviceForm({ options, title, onSubmit }) {
    const [device, setDevice] = useState()
    const [condition, setCondition] = useState()
    const [quantity, setQuantity] = useState()
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const values = {
            device: device.value,
            condition: condition.value,
            price: device.price[condition.value],
            quantity,
            firstName: fName,
            lastName: lName,
            address,
            phone,
            email
        }
        onSubmit(values)
    }
    
    return (
        <div className="deviceForm">
            <h1 className="deviceForm__title">{title}</h1>
            <div className="deviceForm__content">
               <div className="deviceForm__form">
                    <form onSubmit={handleSubmit} >
                        <FormDropdown 
                            options={options} 
                            onChange={(val) => setDevice(val)}
                            placeholder="Select device"
                        />
                        {device && (
                            <>
                                <FormDropdown 
                                    options={conditions} 
                                    onChange={(val) => setCondition(val)}
                                    placeholder="Condition"
                                />
                                <FormInput 
                                    placeholder="Quantity (min 10)" 
                                    value={quantity}
                                    onChange={setQuantity}
                                    type="number"
                                    min="10"
                                />
                                <FormInput 
                                    placeholder="First name" 
                                    value={fName}
                                    onChange={setFName}
                                />
                                <FormInput 
                                    placeholder="Last name" 
                                    value={lName}
                                    onChange={setLName}
                                />
                                <FormInput 
                                    placeholder="Your email" 
                                    value={email}
                                    onChange={setEmail}
                                />
                                <FormInput 
                                    placeholder="Your phone" 
                                    value={phone}
                                    onChange={setPhone}
                                />
                                <FormInput 
                                    placeholder="Your address" 
                                    value={address}
                                    onChange={setAddress}
                                />
                                
                                <FormButton 
                                    title="Submit" 
                                    disable={(device && condition && quantity && fName && lName && address && phone && email) ? false : true}
                                />
                            </>
                        )}
                    </form>
                </div>
                {device && (
                    <div className="deviceForm__image">
                        <img src={device.image} alt="" />
                        {(condition) && (
                            <h2 className="deviceForm__price">Price ${device.price[condition.value]}</h2>
                        )}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default DeviceForm
