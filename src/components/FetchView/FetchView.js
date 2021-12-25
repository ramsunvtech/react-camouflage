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
  const isStatusFailed = (!status)
  const isAllFailed = (![
    statusMapping[Statuses.Loading],
    statusMapping[Statuses.Success],
    statusMapping[Statuses.Error],
  ].includes(true))

  if (isStatusFailed || isAllFailed) {
    return children
  }

  return null
}

function FetchingView({ loadingText = 'Loading...', children }) {
  const { status, statusMapping } = useFetchContext()
  const isLoadingPassed = (status === Statuses.Loading)
  const isLoadingPassedInMapping = (!status && statusMapping[Statuses.Loading] === true)

  if (isLoadingPassed || isLoadingPassedInMapping) {
    return children || <div>{loadingText}</div>
  }

  return null
}

function FetchedView({ children }) {
  const { status, statusMapping } = useFetchContext()
  const isSuccessPassed = (status === Statuses.Success)
  const isSuccessPassedInMapping = (!status && statusMapping[Statuses.Success] === true)

  if (isSuccessPassed || isSuccessPassedInMapping) {
    return children
  }

  return null
}

function ErrorView({ children }) {
  const { status, statusMapping } = useFetchContext()
  const isErrorPassed = (status === Statuses.Error)
  const isErrorPassedInMapping = (!status && statusMapping[Statuses.Error] === true)

  if (isErrorPassed || isErrorPassedInMapping) {
    return children
  }

  return null
}

function FetchView(props) {
  const { children, ...fetchStates } = props

  return (
    <FetchContext.Provider value={fetchStates}>
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
