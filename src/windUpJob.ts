import {debug, setOutput} from '@actions/core'
import type {Result} from 'semantic-release'

/** Wind up the job. */
export default (result: Result): void => {
  if (!result) {
    debug('No release published.')
    return
  }

  const {lastRelease, commits, nextRelease, releases} = result

  debug(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`)

  if (lastRelease.version) debug(`The last release was "${lastRelease.version}".`)

  releases.forEach(release => debug(`The release was published with plugin "${release.pluginName}".`))

  const {version} = nextRelease
  const [major, minor, patch] = version.split('.')

  // set outputs
  setOutput('new_release_published', 'true')
  setOutput('new_release_version', version)
  setOutput('new_release_major_version', major)
  setOutput('new_release_minor_version', minor)
  setOutput('new_release_patch_version', patch)
}
