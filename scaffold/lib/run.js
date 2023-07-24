import namePrompt from './namePrompt.js'
import writeComponent from './writeComponent.js'

const run = async () => {
  const name = await namePrompt()
  writeComponent(name)
}

export default run
