import React from "react";


export default function Joke(prop){
    return(
        <div>
            <h3>{prop.setup}</h3>
            <p>Punchline: {prop.punchline}</p>
        </div>
    )
}