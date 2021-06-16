import './style.css'
import FormInput from '../FormInput'
import { useState } from 'react'
import FormDropdown from '../FormDropdown'
import FormButton from '../FormButton'
import Fade from 'react-reveal/Fade';

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
            <Fade top>
                <h1 className="deviceForm__title">{title}</h1>
            </Fade>
            <div className="deviceForm__content">
                <Fade bottom>
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
                                    <div className="deviceForm__inputs">
                                        <Fade bottom cascade>
                                            <FormInput 
                                                placeholder="Quantity (min 10)" 
                                                value={quantity}
                                                onChange={setQuantity}
                                                type="number"
                                                min="10"
                                            />
                                            <div className="deviceForm__halfGrid">
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
                                            </div>
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
                                        </Fade>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </Fade>
                {device && (
                    <div className="deviceForm__image">
                        <Fade bottom>
                            <img src={device.image} alt="" />
                        </Fade>
                        {(condition) && (
                            <Fade bottom>
                                <h2 className="deviceForm__price">Price ${device.price[condition.value]}</h2>
                            </Fade>
                        )}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default DeviceForm
