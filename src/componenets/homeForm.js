import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const homeForm = (props) => {

    return(
        <div className='container'>
            <form>
                <h1>Home Page</h1>
                <Link id="order-pizza" to="/pizza">order now</Link>
            </form>
        </div>
    )
}

export default homeForm;