# react-camouflage
`react-camouflage` components help to change view as per various status

## Usage

### FetchView

Get rid of the below lengthy conditions.

```
if (!status) {
  return <PartialLoader />
} else if (status === 'loading') {
  return <Spinner />
} else if (status === 'success') {
  return <MailList />
} else {
   return (
     Error Occurred: Please click to try again.
   );
}
```

FetchView with `status` Props.

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
    <PartialLoader />
  </FetchView.Initial>
  <FetchView.Fetching>
    <Spinner />
  </FetchView.Fetching>
  <FetchView.Fetched>
    <MailList />
  </FetchView.Fetched>
  <FetchView.Error>
    <span>Error Occurred: Please click to try again.</span>
  </FetchView.Error>
</FetchView>
```

FetchView with `status` Props.

```
const statusMapping = {
  [Statuses.Success]: (status === 'success'),
  [Statuses.Error]: (status === 'error'),
  [Statuses.Loading]: (status === 'loading'),
}

<FetchView statusMapping={statusMapping}>
  <FetchView.Initial>
    <PartialLoader />
  </FetchView.Initial>
  <FetchView.Fetching>
    <Spinner />
  </FetchView.Fetching>
  <FetchView.Fetched>
    <MailList />
  </FetchView.Fetched>
  <FetchView.Error>
    <span>Error Occurred: Please click to try again.</span>
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