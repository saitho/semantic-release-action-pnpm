import {join} from 'path'
import {error, debug, getInput} from '@actions/core'
import exec from './_exec'

/** Pre-install plugins, */
export default async (): Promise<void> => {
  const plugins = getInput('extra_plugins')

  if (!plugins) return

  const {stdout, stderr} = await exec(`pnpm i ${plugins.replace(/'|"/g, '').replace(/\n|\r/g, ' ')}`, {
    cwd: join(__dirname, '..')
  })
  debug(stdout)
  error(stderr)
}
