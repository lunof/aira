import path from 'node:path'

/** @type {import('lint-staged').ConfigFn} */
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

/** @type {import('lint-staged').Config} */
const config = {
  '*': ['prettier --write --cache --ignore-unknown'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}

export default config
