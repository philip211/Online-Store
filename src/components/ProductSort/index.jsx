import { useDispatch } from 'react-redux';
import { allProductSortAction } from '../../store/reducers/productReducer';
import s from './index.module.css';

export default function ProductSort() {
    const dispatch = useDispatch();

    const sorting = event => dispatch(allProductSortAction(event.target.value));

    return (
        <div className={s.sorting}>
            <p>Sorted</p>
            <select onChange={sorting}>
                <option value='default'>by default</option>
                <option value='title'>By title A-Z</option>
                <option value='price_asc'>by price ASC</option>
                <option value='price_desc'>By price DESC</option>
            </select>
        </div>
    );
}
