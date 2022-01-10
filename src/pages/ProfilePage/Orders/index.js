import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectOrders} from '../../../store/profile/selectors'
import {getUserOrders} from '../../../store/profile/thunks'
import OrderItem from './OrderItem'
import {Typography} from '@mui/material'

export default function Orders() {
  const orders = useSelector(selectOrders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserOrders())
  }, [dispatch])

  return (
    <div>
      <Typography>
        My orders:
      </Typography>
      {orders && orders.length === 0 && <div>No orders</div>}
      {orders && orders.map(order => (
        <OrderItem order={order} key={order.id}/>
      ))}
    </div>
  )
}
