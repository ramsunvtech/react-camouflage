# react-camouflage
`react-camouflage` components help to change view as per various status

## Usage

### FetchView

```
const status = 'success';
/**
 * `FetchView.Initial` will render when status is undefined or null.
 * `FetchView.Fetching` will render when status is 'loading`.
 * `FetchView.Fetched` will render when status is 'success`.
 * `FetchView.Error` will render when status is 'error`.
 */

<FetchView status={status}>
  <FetchView.Initial>
    Default view
  </FetchView.Initial>
  <FetchView.Fetching>
    <div>Loading Standards...</div>
  </FetchView.Fetching>
  <FetchView.Fetched>
    Done. Success!
  </FetchView.Fetched>
  <FetchView.Error>
    <div>sorry error message</div>
  </FetchView.Error>
</FetchView>
```

##### Using NPM:

```sh
$ npm install react-camouflage --save
```

##### Using yarn

```sh
$ yarn add react-camouflage
```

# Demo

[Code Sandbox Working Demo](https://codesandbox.io/s/react-camouflage-test-in-ts-f139j)

# License
MIT