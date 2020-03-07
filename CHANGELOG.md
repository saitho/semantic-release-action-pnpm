# 1.0.0 (2020-03-07)


### Bug Fixes

* **branch:** parameter `branch` does not work in semantic v16 ([3e27c51](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/3e27c518af9a3d781b70e0cf1cbccc626ae7f4f3)), closes [#15](https://github.com/cherryblossom000/semantic-release-action-pnpm/issues/15) [#15](https://github.com/cherryblossom000/semantic-release-action-pnpm/issues/15)
* fix wrong version ([db14ba3](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/db14ba3eee0c681deee056535d2da3cc39a9411b))
* **.npmrc:** clean up `.npmrc` file in the repo after releasing ([a0ef86e](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/a0ef86eea3257234992126447d883529ce057ece)), closes [#2](https://github.com/cherryblossom000/semantic-release-action-pnpm/issues/2) [/github.com/semantic-release/semantic-release/issues/974#issuecomment-546577677](https://github.com//github.com/semantic-release/semantic-release/issues/974/issues/issuecomment-546577677)
* **.npmrc:** modify wrong cwd for exec ([6cfcf38](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/6cfcf38c9b9cce2215ff5ae7f509b6501c8f8206))
* **branch v1:** push updates to v1 branch after releases([#1](https://github.com/cherryblossom000/semantic-release-action-pnpm/issues/1)) ([bb964eb](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/bb964eb28ee1823e67f82532b9e4d4fd3f135513))
* **inputs:** adjust the default for the "branch" configuration ([e5c555a](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/e5c555a6131ac6c67ba74b1e2d5e5cde56d38d10))
* **install:** uninterrupted installation errors ([3a7ccd6](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/3a7ccd6a7fe4ed5e17de6560568e0b7b200709ed))
* **release:** bad substitution ([575492b](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/575492bbdcd5c93d1349250e3a1847a85d41419c))
* **src/index.js:** remove 'stream-buffers' ([d2cecad](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/d2cecad9a9379c7b03313be62c36da778eafa742))


### Features

* **dry_run:** add a new input - "dry_run" ([65686aa](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/65686aabe72b7b976902b278411b8a4d16298fd0))
* **inputs:** add semantic_version to specify version range([#3](https://github.com/cherryblossom000/semantic-release-action-pnpm/issues/3)) ([55e8862](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/55e8862f175cf05a7550c87bdbca1b440aeb1000))
* **outputs:** Add outputs related to new release version ([12a1a39](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/12a1a39975a23b4915e90567d975240096cec66c))
* add a new output - "new-release-published" ([be8f403](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/be8f403201951e0c7b237bb7daab2c561af7303d))
* come a new action ([b9ad41d](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/b9ad41da609c63abe1b5f5ab5df7b4383d346906))


### Performance Improvements

* use the latest version of semantic-release by default ([600e4f0](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/600e4f0e2b761e1745995b660d7d8a8977172d26))


### Styles

* **outputs:** uniform outputs to underline format ([4cea44f](https://github.com/cherryblossom000/semantic-release-action-pnpm/commit/4cea44f71ac0f0c6e31dbb1fffeae5826eec6e2a))


### BREAKING CHANGES

* **outputs:** uniform outputs to underline format

Before:

outputs:
- new-release-published:
- new-release-version
- new-release-major-version
- new-release-minor-version
- new-release-patch-version

After:

outputs:
- new_release_published:
- new_release_version
- new_release_major_version
- new_release_minor_version
- new_release_patch_version
