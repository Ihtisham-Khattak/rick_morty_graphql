import React from 'react'
import { SearchCharacter } from '../custom/SearchCharacter'


const CharacterAPI = () => {

    const {error, loading, data} = SearchCharacter(4)
    console.log({error, loading, data})
  return (
    <div>CharacterAPI</div>
  )
}

export default CharacterAPI