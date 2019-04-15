export default ({ app }, inject) => {
  inject('dataUrlDownload', (name: string, dataUrl: string) => {
    const link = document.createElement('a')
    link.download = name
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    delete link.download
    delete link.href
  })
}
