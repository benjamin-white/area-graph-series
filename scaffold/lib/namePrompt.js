import input from '@inquirer/input'
import validate from './validate.js'

const namePrompt = async () => {
  const name = await input({
    message: 'Enter component name in PascalCase',
    validate,
  })

  return name
}

export default namePrompt
