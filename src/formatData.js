// format data
const formatData = (items) => {
    let temp = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(img => img.fields.file.url)
      return { ...item.fields, id, images }
    })
    return temp
  }

export default formatData