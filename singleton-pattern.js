let configurationSingleton = (() => {
  let config

  function initializeConfiguration(values) {
    this.randomNumber = Math.random()
    values = values || {}
    this.number = values.number || 5
    this.size = values.size || 10
  }

  return {
    getConfig: (values) => {
      if (config === undefined) {
        config = new initializeConfiguration(values)
      }

      return config
    }
  }
})()

const configObject = configurationSingleton.getConfig({ size: 8 })

console.log(configObject)

const configObject1 = configurationSingleton.getConfig({ number: 8 })

console.log(configObject1)
