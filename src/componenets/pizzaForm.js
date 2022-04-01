import React from 'react';
import { toppings } from '../utils/toppings';

const pizzaForm = (props) => {
    const { change, submit, errors, onChecked, check } = props
    const { name, special, size } = props.cmpnts


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
            <form id="pizza-form" onSubmit={onSubmit}>
                <div>Build Your Pizza</div>
                <div className='errors'>
                    <p>{errors.name}</p>
                    <p>{errors.sizes}</p>
                </div>
                <label>Name
                    <input 
                        id="name-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}                      
                    />
                </label>
                <label>Size
                    <select id="size-dropdown" name="size" value={size} onChange={onChange}>
                        <option value="">Select a Size</option>
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
                        name="special"
                        value={special}
                        onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create Order" id="order-button" />
            </form>
        </div>
    )
}

export default pizzaForm;