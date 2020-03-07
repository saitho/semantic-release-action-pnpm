import {join} from 'path'
import {debug, setOutput} from '@actions/core'

/** Set up job. */
export default (): void => {
  // set outputs default
  setOutput('new_release_published', 'false')

  debug('action_workspace: ' + join(__dirname, '..'))
  debug('process.cwd: ' + process.cwd())
}
