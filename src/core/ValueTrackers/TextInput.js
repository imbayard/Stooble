import React from 'react'

export default function TextInput({
    placeHolder,
    changer,
    val
}) {
    return (
        <input className='custom-text-input' placeholder={placeHolder} onChange={(e) => changer(e.target.value)} value={val}/>
    )
}