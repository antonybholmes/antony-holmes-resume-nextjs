export const getTWColor = (
  color: string = 'black',
  type: string = 'text',
  hover: boolean = false
) => {
  let ret = `${hover ? 'hover:' : ''}${type}-`

  switch (color) {
    case 'red':
      return `${ret}red-500`
    case 'blue':
      return `${ret}sky-300`
    case 'dark-blue':
      return `${ret}blue-700`
    case 'green':
      return `${ret}green-500`
    case 'dark-green':
      return `${ret}green-600`
    case 'white':
      return `${ret}white-98`
    case 'gray':
      return `${ret}gray-500`
    case 'black':
      return `${ret}black`
    default:
      return '' //${ret}slate-800`
  }
}
