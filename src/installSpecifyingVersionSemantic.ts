import {join} from 'path'
import {error, debug, getInput} from '@actions/core'
import exec from './_exec'

/** Install specifying version of semantic-release */
export default async (): Promise<void> => {
  const semanticVersion = getInput('semantic_version')
  const {stdout, stderr} = await exec(`pnpm i semantic-release${semanticVersion ? `@${semanticVersion}` : ''}`, {
    cwd: join(__dirname, '..')
  })
  debug(stdout)
  error(stderr)
}
