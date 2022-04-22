import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({color,texto}) => {
  return (
    <div className='ItemListContainer'>Item list!
        <p style={{color}}>{texto ? texto: 'texto defalt'}</p>
    </div>
  )
}

export default ItemListContainer