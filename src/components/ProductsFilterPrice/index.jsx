import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { allFilterProductPriceAction } from '../../store/reducers/productReducer';
import s from './index.module.css';

export default function ProductsFilterPrice() {
    const dispatch = useDispatch();
    const [filterParams, setFilterParams] = useState({ min: 0, max: Infinity });

    const filterHandler = event => {
        const name = event.target.name;
        const value = +event.target.value;

        if (!isNaN(value)) { 
            const updatedParams = { ...filterParams, [name]: value };
            setFilterParams(updatedParams);
            dispatch(allFilterProductPriceAction(updatedParams));
        }
    };

    return (
        <form className={s.form_price}>
            <label htmlFor='price'>Price</label>
            <input type="text" name="min" placeholder="from" onChange={filterHandler} />
            <input type="text" name="max" placeholder="to" onChange={filterHandler} />
        </form>
    );
}
