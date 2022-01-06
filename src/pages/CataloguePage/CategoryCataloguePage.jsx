import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProductsByCategory} from '../../store/catalogue/thunks'
import {selectProducts} from '../../store/catalogue/selectors'
import CataloguePage from './CataloguePage'

export default function CategoryCataloguePage() {
  const params = useParams()
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(getProductsByCategory(params.id))
  }, [dispatch, params])

  return (
    <CataloguePage products={products} categoryId={params.id}/>
  )
}
