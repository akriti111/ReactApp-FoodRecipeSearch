import React from 'react'
import {v4 as uuidv4} from 'uuid'
const Detail = ({ingredients}) => {

    return ingredients.map( ingredient =>
        {
            return(
                <ul key={uuidv4()}>
                    <li>
                        {ingredient.text}
                    </li>
                    <li>
                      Weight = {ingredient.weight}
                    </li>
                </ul>
            )
        })
}

export default Detail
