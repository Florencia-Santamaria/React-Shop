import React, { useState, useContext } from 'react'
import '@styles/Header.scss'
import MyOrder from '../containers/MyOrder'
import menu from '@icons/icon_menu.svg'
import Menu from '@components/Menu'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import AppContext from '../context/AppContext'

const header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav>
      <img src={menu} alt='menu' class='menu' />
      <div className='navbar-left'>
        <img src={logo} alt='logo' class='nav-logo' />

        <ul>
          <li>
            <a href='/'>All</a>
          </li>
          <li>
            <a href='/'>Clothes</a>
          </li>
          <li>
            <a href='/'>Electronics</a>
          </li>
          <li>
            <a href='/'>Furnitures</a>
          </li>
          <li>
            <a href='/'>Toys</a>
          </li>
          <li>
            <a href='/'>Others</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className='navbar-shopping-cart'
            onClick={() => handleToggle(setToggleOrders(!toggleOrders))}
          >
            <img className='navbar-logo' src={shoppingCart} alt='shopping cart' />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default header
