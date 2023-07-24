import chalk from 'chalk'
import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import TEMPLATES from '../templates/templates.js'
import run from './run.js'

const { log } = console
const { red } = chalk

const makeFiles = async (rootDir, name) => {
  for (const file of Object.values(TEMPLATES)) {
    try {
      await writeFile(
        `${rootDir}/${file.path.replaceAll('__NAME__', name)}`,
        file.content.replaceAll('__NAME__', name),
      )
    } catch (error) {
      log(red(error.toString()))
    }
  }
}

const writeComponent = async (name) => {
  const rootDir = `./src/components/${name}`

  if (existsSync(rootDir)) {
    log(red('Component directory already exists!'))
    run()
  } else {
    try {
      await Promise.all([
        mkdir(rootDir, { recursive: true }),
        mkdir(`${rootDir}/stories`, { recursive: true }),
        mkdir(`${rootDir}/test`, { recursive: true }),
      ])
    } catch (error) {
      log(red(error.toString()))
    }

    await makeFiles(rootDir, name)
  }
}

export default writeComponent
