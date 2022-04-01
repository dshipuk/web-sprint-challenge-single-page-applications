import React from 'react';
import { toppings } from '../utils/toppings';

const pizzaForm = (props) => {
    const { change, submit, errors, onChecked, check } = props
    const { clientname, specialtext } = props.cmpnts


    const onChange = (evt) => {
        const { name, value} = evt.target;
        change(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form id="pizza-form">
                <div>Build Your Pizza</div>
                <div className='errors'>
                    <p>{errors.clientname}</p>
                </div>
                <label>Name
                    <input 
                        id="name-input"
                        type="text"
                        name="clientname"
                        value={clientname}
                        onChange={onChange}                      
                    />
                </label>
                <label>Size
                    <select id="size-dropdown">
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                </label>
                <label>ChooseToppings
                    <div className='toppings'>
                        {toppings.map(({ name }, index) => {
                            return (
                                <li key={index}>
                                    <input 
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={check[index]}
                                        onChange={() => onChecked(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </li>
                            )
                        })}
                    </div>
                </label>
                <label>Special Instructions
                    <input 
                        id='special-text'
                        type="text"
                        name="specialtext"
                        value={specialtext}
                        onChange={onChange}
                    />
                </label>
                
            </form>
        </div>
    )
}

export default pizzaForm;