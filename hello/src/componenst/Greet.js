import React from "react"


// function Greet(){
//     return <h1> Hello Vishwas</h1>
// }
const Greet = (props) => {
console.log(props)
props.name = "Ana"
return(
<div>
    <h1>
        Hello {props.name} a.k {props.heroName}
    </h1>
    {props.children}
    </div>
)

}
export default Greet 
