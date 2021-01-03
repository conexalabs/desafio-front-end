export const removeCaracterURL = (string) => {
    return string.replace(/\s/gi, '-').toLowerCase()
}

export const removeUnderscores = ( string, capitalLetter = true) => {
    let UrlFormadata = capitalLetter === true ? 
            string.replace(/-/g, ' ').toLowerCase() : 
            string.replace(/-/g, ' ').toUpperCase()
    return UrlFormadata
}