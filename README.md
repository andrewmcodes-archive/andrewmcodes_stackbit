# andrewm.codes

# Setup

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Yarn install dependencies:

```
yarn  install
```

1. get "stackbit-api-key" from project menu in [Stackbit dashboard](https://app.stackbit.com/dashboard)

1. run the following command to assign this key to `STACKBIT_API_KEY` environment variable:

```sh
export STACKBIT_API_KEY={stackbit_netlify_api_key}
```

1. run the following command to fetch additional site contents from Stackbit if needed:

```sh
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5deaf666b58d9e001e4de17f
```

1. Starts a development server

```sh
yarn develop
```

1. Browse to [http://localhost:8000/](http://localhost:8000/)
