import {lazyLoad} from '../../utils/loadable.js'
import React from 'react'
import {LoadingIndicator} from '../../components/LoadingIndicator'

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: <LoadingIndicator/>
  }
)
