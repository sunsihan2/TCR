import React from 'react'
import Item from './Item'
export const ItemList = ({items, deleteItem }) => {
  return (
    <div>
        {items.map((item, index) => {
            return (
                <Item  key={index}  item={item} deleteItem={()=> deleteItem(index)} />
            )
        })}
    </div>
  )
}
