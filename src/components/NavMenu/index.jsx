import React from 'react'
import{Link} from 'react-router-dom'
import s from './index.module.css'
import { useSelector } from 'react-redux'

export default function NavMenu() {

  const cart_state = useSelector(state =>state.allcart)
  
  return (
    <div className={s.header}>
       <div className={s.left_header}>
        <Link to='/'>
          <img className={s.logo} src="/media/logo.png" alt="logo" />
        </Link>
           <Link 
             className={s.catalog}
             to='/categories'
           >Catalog</Link>
       </div>
       <div className={s.right_header}>
         <Link to='/'>Main Page</Link>
         <Link to='/products'>All products</Link>
         <Link to='/discount'>All sales</Link>
       </div>
       <div>
          <Link to='/cart'>
          <img className={s.cart} src="/media/cart.png" alt="cart" />
        </Link>
        {cart_state.length}
      </div>
    </div>
  )
}
