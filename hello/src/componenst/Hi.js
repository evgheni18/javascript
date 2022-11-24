import React from "react";
const Hi = () => {
    // return (
    //     <div className = "dummy Class">
    //         <h1>Hi world</h1>
    //     </div>
    // )
    return React.createElement (
         "div", 
         {id: "salut", className: "dummy Class"}, 
         React.createElement("h1", null, "Hi world"))
}

export default Hi