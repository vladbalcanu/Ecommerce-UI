import React, {useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {searchProducts} from '../../store/catalogue/thunks'
import {selectProducts} from '../../store/catalogue/selectors'
import CataloguePage from './CataloguePage'

export default function SearchCataloguePage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    const searchValue = searchParams.get('search')
    dispatch(searchProducts(searchValue))
  }, [dispatch, searchParams])

  return (
    <CataloguePage products={products}/>
  )
}
