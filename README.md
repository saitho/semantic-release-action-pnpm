# semantic-release action using pnpm
[![Build status](https://github.com/cherryblossom000/semantic-release-action-pnpm/workflows/Build/badge.svg)](https://github.com/cherryblossom000/semantic-release-action-pnpm/actions)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

GitHub Action for [semantic-release](https://github.com/semantic-release/semantic-release) using [pnpm](https://github.com/pnpm/pnpm). Forked from [the original](https://github.com/cycjimmy/semantic-release-action).

## Usage
1. [Configure semantic-release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration) in your repository.

2. [Add secrets](https://help.github.com/en/articles/virtual-environments-for-github-actions#creating-and-using-secrets-encrypted-variables) in your repository for the [semantic-release authentication](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/ci-configuration.md#authentication) environment variables.

3. Add a [workflow file](https://help.github.com/en/articles/workflow-syntax-for-github-actions) to your repository.

### Inputs
All inputs are optional.
| Name               | Description |
| ------------------ | ----------- |
| `branch`           | The branch on which releases should happen. It will override the branch attribute in your configuration file. If the attribute is not configured on both sides, the default is `master`. |
| `semantic_version` | The version range for semantic-release. |
| `extra_plugins`    | Extra plugins that are not included in the [semantic-release defaults](https://semantic-release.gitbook.io/semantic-release/usage/plugins#default-plugins), separated by new lines. You can also specify the version range. |
| `dry_run`          | Whether to run semantic release in `dry-run` mode (`true` or `false`). It will override the `dryRun` attribute in your configuration file. |

### Outputs
| Name                        | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| `new_release_published`     | Whether a new release was published (`true` or `false`). |
| `new_release_version`       | Version of the new release.                              |
| `new_release_major_version` | Major version of the new release.                        |
| `new_release_minor_version` | Minor version of the new release.                        |
| `new_release_patch_version` | Patch version of the new release.                        |

### Examples
```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2
  - name: Semantic Release
    uses: cherryblossom000/semantic-release-action-pnpm@v1
    env:
      GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
      NPM_TOKEN: ${{secrets.NPM_TOKEN}}
```

#### Passing extra plugins with `extra_plugins`
The action can be used with `extra_plugins` option to specify plugins which are not in the [default list of plugins of semantic release](https://semantic-release.gitbook.io/semantic-release/usage/plugins#default-plugins). When using this option, please make sure that these plugins are also mentioned in your [semantic release configâ€™s plugins](https://semantic-release.gitbook.io/semantic-release/usage/configuration#plugins) array. For example, if you want to use `@semantic-release/git` and `@semantic-release/changelog` extra plugins, these must be added to `extra_plugins` in your actions file and `plugins` in your [release config file](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file) as shown bellow:

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2
  - name: Semantic Release
    uses: cherryblossom000/semantic-release-action-pnpm@v1
    with:
      # You can specify specifying version range for the extra plugins if you prefer.
      extra_plugins: |
        @semantic-release/changelog@3.0.0
        @semantic-release/git
    env:
      GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
      NPM_TOKEN: ${{secrets.NPM_TOKEN}}
```

`.releaserc`
```diff
  plugins: [
+   "@semantic-release/changelog"
+   "@semantic-release/git",
  ]
```

#### Specifying a version of semantic-release and its plugins
```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v2
  - name: Semantic Release
    uses: cherryblossom000/semantic-release-action-pnpm@v1
    with:
      semantic_version: 15.14.0
      extra_plugins: |
        @semantic-release/git@7.0.18
    env:
      GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
      NPM_TOKEN: ${{secrets.NPM_TOKEN}}
```

## License
[MIT](LICENSE) © 2020 cherryblossom000 and 2019 cycjimmy
