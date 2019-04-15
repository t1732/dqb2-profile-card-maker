export default ({ app }, inject) => {
  inject('formatDateNow', (value: string = 'YYYY-MM-DD hh:mm:ss'): string => {
    const date: Date = new Date()
    let format: string = value + ''
    format = format.replace(/YYYY/g, date.getFullYear().toString())
    format = format.replace(/MM/g, date.getMonth().toString())
    format = format.replace(/DD/g, date.getDate().toString())
    format = format.replace(/hh/g, date.getHours().toString())
    format = format.replace(/mm/g, date.getMinutes().toString())
    format = format.replace(/ss/g, date.getSeconds().toString())
    return format
  })
}
