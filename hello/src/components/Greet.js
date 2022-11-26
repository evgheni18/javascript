import React from "react"


// function Greet(){
//     return <h1> Hello Vishwas</h1>
// }
// const Greet = ({name, heroName}) => {
// // props.name = "Ana"
// return(
// <div>
//     <h1>
//         Hello {name} a.k {heroName}
//     </h1>
//     {/* {props.children} */}
//     </div>
// )

// }
// export default Greet 

// or 


const Greet = props => {
    const{name, heroName} =props
    // props.name = "Ana"
    return(
    <div>
        <h1>
            Hello {name} a.k. {heroName}
        </h1>
        {/* {props.children} */}
        </div>
    )
    
    }
    export default Greet 