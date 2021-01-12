export const labelMask = (inputValue) => {

    if (inputValue.length <= 18) {

       inputValue=inputValue.replace(/^(\d{2})(\d)/,"$1.$2")
       inputValue=inputValue.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
       inputValue=inputValue.replace(/\.(\d{3})(\d)/,".$1/$2")
       inputValue=inputValue.replace(/(\d{4})(\d)/,"$1-$2")
                    
    }
     
    return inputValue
}
