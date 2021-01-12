import {useState} from 'react'
import { labelMask } from '../utils/labelMask'

const useInput = () => {
    const [value, setValue] = useState("")

    const dealValue = (e) => {
        setValue(labelMask(e.target.value))
    }

    return [value, dealValue]
}

export default useInput;