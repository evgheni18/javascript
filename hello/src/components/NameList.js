import React from 'react';

function NameList() {
  const persons = [
    {
        id: 1,
        name: "Bruce", 
        age: 30,
        skill: "react"
    },
    {
        id: 2,
        name: "Clark", 
        age: 25,
        skill: "node"
    },
    {
        id:  3,
        name: "Diana", 
        age: 28,
        skill: "angular"
    }
  ]

  const personList = persons.map(person => <Person person= {person} />)
  return <div>{personList}</div>

}

export default NameList;

