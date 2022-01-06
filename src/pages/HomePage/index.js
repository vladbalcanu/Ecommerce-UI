import React from 'react'
import CategoriesMenu from '../../components/CategoriesMenu'
import styles from './HomePage.module.css'
import {Card} from '@mui/material'

export function HomePage() {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.categoriesMenuContainer}>
        <Card>
          <CategoriesMenu/>
        </Card>
      </div>
    </div>
  )
}
