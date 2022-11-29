import React from 'react';

function NameList() {
    const persons = [
    {
        id: 1,
        name: "Bruce", 
        age: 30,
        skill: "react"
    }
  ]
    const personList = persons.map(person => <Person person ={person} />)
  return <div>{personList}</div> 
}

export default NameList
