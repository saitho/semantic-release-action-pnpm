import {debug, setFailed} from '@actions/core'
import semanticRelease from 'semantic-release'
import cleanupNpmrc from './cleanupNpmrc'
import {handleBranchOption, handleDryRunOption} from './handleOptions'
import installSpecifyingVersionSemantic from './installSpecifyingVersionSemantic'
import preInstallPlugins from './preInstallPlugins'
import setUpJob from './setUpJob'
import windUpJob from './windUpJob'

/** Release main task. */
const release = async (): Promise<void> => {
  setUpJob()
  await installSpecifyingVersionSemantic()
  await preInstallPlugins()

  const result = await semanticRelease({
    ...handleBranchOption(),
    ...handleDryRunOption()
  })

  await cleanupNpmrc()
  windUpJob(result)
}

export default (): void => {
  debug('Initialization successful')
  release().catch(setFailed)
}
