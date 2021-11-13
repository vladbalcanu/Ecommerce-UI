import React, {lazy, Suspense} from 'react'
import {LoadingIndicator} from '../components/LoadingIndicator'


export const lazyLoad = (importFunc, selectorFunc, opts = {}) => {
  let lazyFactory = importFunc

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => ({default: selectorFunc(module)}))
  }

  const LazyComponent = lazy(lazyFactory)

  return (props) => (
    <Suspense fallback={opts.fallback ? opts.fallback : <LoadingIndicator/>}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
