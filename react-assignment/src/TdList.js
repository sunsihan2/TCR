import React, {useState} from 'react'
import { InputField } from './InputField'
import { ItemList } from './ItemList'

export const TdList = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const [sort, setSort] = useState("A-Z")

  const addItem = () => {
    setItems([...items, newItem])
    setNewItem("")
  } 
  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index))
  }
  const sortItems = (order) => {
    const sortedItems = [...items].sort()
    if(order ==="Z-A" ){
      sortItems.reverse()
    }
    setItems(sortedItems)
  }

  return (
    <>
      <InputField newItem={newItem} setNewItem={setNewItem} addItem={addItem} sort={sort}  setSort={setSort} sortItems={sortItems}/>
      <ItemList items={items} deleteItem={deleteItem} />
    </>
  )
}
