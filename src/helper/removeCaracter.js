export const removeCaracter = (number) => {
    return number.replace(/[^0-9]/g, '')
}