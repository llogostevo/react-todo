import React from 'react'

export const ListItem = ({groceriesList}) => {
  return (
    groceriesList.map((item, i) => {
        return (<li key={i}>{`${i+1} ${item}`}</li>);
    } )
  )
}


export default ListItem