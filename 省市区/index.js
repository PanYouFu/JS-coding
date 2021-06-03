function translateDataToTree(data) {
    let parents = data.filter(value => value.parentId == 'undefined' || value.parentId == null)
    let childrens = data.filter(value => value.parentId !== 'undefined' && value.parentId != null)
    let translator = (parents, childrens) => {
      parents.forEach((parent) => {
        childrens.forEach((current, index) => {
          if (current.parentId === parent.id) {
            let temp = JSON.parse(JSON.stringify(childrens))
            temp.splice(index, 1)
            translator([current], temp)
            typeof parent.childrens !== 'undefined' ? parent.childrens.push(current) : parent.childrens = [current]
          }
        }
        )
      }
      )
    }
   
    translator(parents, childrens)
   
    return parents
  }