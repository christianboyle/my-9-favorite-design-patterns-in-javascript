let namesCollection = (() => {
  // private
  let objects = []

  const addObject = (object) => {
    objects.push(object)
  }

  const removeObject = (object) => {
    let index = objects.indexOf(object)
    if (index >= 0) {
      objects.splice(index, 1)
    }
  }

  const getObjects = () => JSON.parse(JSON.stringify(objects))

  // public

  return {
    addName: addObject,
    removeName: removeObject,
    getNames: getObjects
  }
})()

namesCollection.addName('Christian')
namesCollection.addName('Lizzy')
namesCollection.addName('Baxter')

console.log(namesCollection.getNames()) // ['Christian', 'Lizzy', 'Baxter']

namesCollection.removeName('Baxter')

console.log(namesCollection.getNames()) // ['Christian', 'Lizzy']
