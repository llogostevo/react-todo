import React from 'react'
import {ListItem} from './ListItem'

export const Groceries = () => {
    const groceriesList = ["eggs", "milk", "sausages"]
  return (
    <>
    <ul>
        {
            <ListItem groceriesList={groceriesList}/>
        }
    </ul>
   </>
  )
}
