let fruitsCollection = (() => {
  // private
  let objects = []

  // public
  return {
    addObject: (object) => {
      objects.push(object)
    },
    removeObject: (object) => {
      let index = objects.indexOf(object)
      if (index >= 0) {
        objects.splice(index, 1)
      }
    },
    getObjects: () => JSON.parse(JSON.stringify(objects))
  }
})()

fruitsCollection.addObject('apple')
fruitsCollection.addObject('orange')
fruitsCollection.addObject('banana')

console.log(fruitsCollection.getObjects()) // ['apple', 'orange', 'banana']

fruitsCollection.removeObject('apple')

console.log(fruitsCollection.getObjects()) // ['orange', 'banana']
