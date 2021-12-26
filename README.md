# react-camouflage
`react-camouflage` components help to change view as per various status

## Usage

### FetchView

#### Get rid of the below lengthy conditions for your API (service) status.

```
if (!status) {
  return <div>Partial Loader goes here</div>
} else if (status === 'loading') {
  return <div>Spinner goes here</div>
} else if (status === 'success') {
  return <div>Service Data List here</div>
} else {
   return (
     <span>Error Occurred: Please click to try again.</div>
   );
}
```

#### Example for FetchView with `status` Props.

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
    <div>Partial Loader goes here</div>
  </FetchView.Initial>
  <FetchView.Fetching>
    <div>Spinner goes here</div>
  </FetchView.Fetching>
  <FetchView.Fetched>
    <div>Service Data List here</div>
  </FetchView.Fetched>
  <FetchView.Error>
    <span>Error Occurred: Please click to try again.</div>
  </FetchView.Error>
</FetchView>
```

#### Example for FetchView with `status` Props.

```
const statusMapping = {
  [Statuses.Success]: (status === 'success'),
  [Statuses.Error]: (status === 'error'),
  [Statuses.Loading]: (status === 'loading'),
}

<FetchView statusMapping={statusMapping}>
  <FetchView.Initial>
    <div>Partial Loader goes here</div>
  </FetchView.Initial>
  <FetchView.Fetching>
    <div>Spinner goes here</div>
  </FetchView.Fetching>
  <FetchView.Fetched>
    <div>Service Data List here</div>
  </FetchView.Fetched>
  <FetchView.Error>
    <span>Error Occurred: Please click to try again.</div>
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