import {debug} from '@actions/core'
import exec from './_exec'

/** Clean up `.npmrc` file in the repo after releasing. */
export default async (): Promise<void> => {
  const {stdout, stderr} = await exec('rm -f .npmrc')
  debug(stdout)

  if (stderr) return Promise.reject(stderr)
}
