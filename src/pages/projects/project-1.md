---
title: Rubocop Linter Action
subtitle: 'https://github.com/andrewmcodes/rubocop-linter-action'
date: 2019-12-12T05:00:00.000Z
thumb_img_path: /images/rubocop-linter-action.png
content_img_path: ''
template: project
---
# :white_check_mark: Rubocop Linter Action

A GitHub Action to run [Rubocop](https://github.com/rubocop-hq/rubocop) against your code and create annotations in the GitHub UI.

## :page_facing_up: Introduction

GitHub Actions are an amazing new tool that can dramatically improve productivity while using the GitHub platform. While it is not hard to write a custom GitHub action to run Rubocop on your codebase, this action takes that functionality one step further using the checks API. After the Rubocop Linter Action runs Rubocop against your code, it will create annotations that you can easily view, matched up with the offending code.

Since GitHub actions and the checks API are continually changing, it is possible that there will be breaking API changes that affect this action. If so, please open an issue and I will look into it as soon as I can.

## :bulb: Usage

Add the following to your GitHub action workflow to use Rubocop Linter Action:

```yaml
- name: Rubocop Linter
  uses: andrewmcodes/rubocop-linter-action@v2.0.0
  with:
    additional_gems: 'rubocop-rails rubocop-performance'
    fail_level: 'warning'
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

It is **highly** recommend you tie yourself to a version and do not do the following. I promise your life will be much easier. 😇

```yml
# ❌ Danger, sometimes I break things!
uses: andrewmcodes/rubocop-linter-action@master

# ✅ Much better.
uses: andrewmcodes/rubocop-linter-action@v2.0.0
```

### :package: Example Workflow

Here is an example workflow file incorporating Rubocop Linter Action:

```yaml
name: Rubocop

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Rubocop Linter
      uses: andrewmcodes/rubocop-linter-action@v2.0.0
      with:
        additional_gems: 'rubocop-rails rubocop-performance'
        fail_level: 'warning'
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**Go [here](https://github.com/andrewmcodes/rubocop-linter-action-playground/blob/master/.github/workflows/test.yml) to see more examples!**

### :moneybag: Available Inputs

| **Input Parm Name** | **Required** | **Default Value** | **Description**                                                                                       | **Examples of Equivalent Local Commands**                                  |
| ------------------- | ------------ | ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| bundle              | false        | false             | If you would like to run `bundle install` on your project instead of `gem install`                    | `bundle install --deployment --jobs 4 --retry 3`                           |
| version             | false        | latest GA         | Define a later version of rubocop if latest is not needed                                             | `gem install rubocop -v 0.76.0`                                            |
| additional_gems     | false        |                   | Additional Gems can be installed via one line with spaces and commands are supported like a version   | `gem install rubocop-rails rubocop-performance 'rubocop-i18n:2.0.0'`         |
| config_path         | false        | repo ./           | If the config path is another spot in the repo or not named `.rubocop.yml`                            | `rubocop -c .rubocop_config_test.yml`                                      |
| exclude_cops        | false        |                   | Define a list of paths to exclude from being linted.                                                  | `rubocop --except 'Style/FrozenStringLiteralComment Style/StringLiterals'` |
| fail_level          | false        | 'warning'         | Can define `refactor`, `convention`, `warning`, `error` and 'fatal' to cause Rubocop to error out on. | `rubocop --fail-level 'warning'`                                           |

## :warning: Gotchas

1. Due to the GitHub Check Runs API, we can only return 50 annotations per run. See [here](https://developer.github.com/v3/checks/runs/#output-object) for more info.
2. There is a bug with the Checks API that might cause your runs to get jumbled in the UI, but they will all still run and render annotations in the diff correctly.
3. You can't use --version with multiple gems. You can specify multiple gems with version requirements using `gem install 'my_gem:1.0.0' 'my_other_gem:~>2.0.0'`
