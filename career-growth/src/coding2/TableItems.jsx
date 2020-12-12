import React from 'react'

export default function TableItems(props)
{
    const array=props.array
    return(
        <>
            {array.map((item)=>
            (
                <tr>
                    {Object.values(item).map(elem=><td>{elem===false ? "Direct" : elem===true? "Remote" : elem}</td>)}
                </tr>
            ))}
        </>
    )
}