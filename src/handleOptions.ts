import {debug, getInput} from '@actions/core'
import {version} from 'semantic-release/package.json'

/** Handle branch option. */
export const handleBranchOption = (): {branch?: string} | {branches?: [string]} => {
  const branchOption: {branch?: string; branches?: [string]} = {}
  const branch = getInput('branch')

  if (!branch) return branchOption

  const semanticMajorVersion = Number(version.replace(/\..+/g, ''))
  debug(`semanticMajorVersion: ${semanticMajorVersion}`)

  if (semanticMajorVersion < 16) branchOption.branch = branch
  else branchOption.branches = [branch]

  return branchOption
}

/** Handle dryRun option. */
export const handleDryRunOption = (): {dryRun?: boolean} => {
  const dryRun = getInput('dry_run')
  return {dryRun: typeof dryRun == 'undefined' ? undefined : dryRun === 'true'}
}

/** Handle debug option. */
export const handleDebugOption = (): {debug?: boolean} => {
  const debug = getInput('debug')
  return {debug: typeof debug == 'undefined' ? undefined : debug === 'true'}
}
