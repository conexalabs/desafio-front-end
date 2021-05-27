import React from 'react'
import InputMask from 'react-input-mask'

const onlyNumbers = (string) => string.replace(/[^0-9]/g, '')

const MaskedInput = ({ value, onChange }) => {

    function HandleChange(event) {
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value)
            }
        })
    }

    return <InputMask mask="99.999.999/9999-99" value={value} onChange={HandleChange} placeholder="CNPJ..." />
}

export default MaskedInput