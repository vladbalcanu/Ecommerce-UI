import {lazyLoad} from '../../utils/loadable'
import {LoadingIndicator} from '../../components/LoadingIndicator'
import React from 'react'

export const NotFoundPage = lazyLoad(
  () => import('./index'),
  module => module.NotFoundPage,
  {
    fallback: <LoadingIndicator/>
  }
)
