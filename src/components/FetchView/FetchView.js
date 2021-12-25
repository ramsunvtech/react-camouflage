import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import { Statuses } from '../../constants/statuses'

const FetchContext = createContext()

function useFetchContext() {
  const context = React.useContext(FetchContext)
  if (!context) {
    throw new Error(
      'FetchView compound component cannot be rendered outside the FetchView component',
    )
  }
  return context
}

function DefaultView({ children }) {
  const { status } = useFetchContext()
  return !status ? children : null
}

function FetchingView({ children }) {
  const { status } = useFetchContext()
  return status === Statuses.Loading ? children || <div>Loading...</div> : null
}

function FetchedView({ children }) {
  const { status } = useFetchContext()
  return status === Statuses.Success ? children : null
}

function ErrorView({ children }) {
  const { status } = useFetchContext()
  return status === Statuses.Error ? children : null
}

function FetchView(props) {
  const { children, status } = props

  return (
    <FetchContext.Provider value={status}>
      {children}
    </FetchContext.Provider>
  )
}

FetchView.Initial = DefaultView
FetchView.Fetching = FetchingView
FetchView.Fetched = FetchedView
FetchView.Error = ErrorView

FetchView.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default FetchView
