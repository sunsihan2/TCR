import React from 'react'

export const InputField = ({ newItem, setNewItem, addItem, sort, setSort, sortItems }) => {
  return (
    <div>
        <input value={newItem} onChange={(e)=> setNewItem(e.target.value)}/>
        <button onClick={addItem}>Add Item</button>
        <select onChange={(e) => {setSort(e.target.value);sortItems(e.target.value)}}>
            <option>A-Z</option>
            <option>Z-A</option>
        </select>
    </div>
  )
}
