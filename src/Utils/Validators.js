export const required = (value) => {
    if(value) return undefined
              return 'Field is require'
}

export const maxLenght = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} simbols`
                                 return undefined
}