import exec from './_exec'
import main from './main'

const run = async (): Promise<void> => {
  // Install Dependencies
  const {stdout, stderr} = await exec('pnpm i -P', {cwd: __dirname})
  console.log(stdout)
  if (stderr) return Promise.reject(stderr)

  main()
}

run().catch(console.error)
