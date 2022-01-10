import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectCategories} from '../../store/categories/selectors'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import {getCategories} from '../../store/categories/thunks'
import {Navigate, useNavigate} from 'react-router-dom'

export default function CategoriesMenu() {
  const dispatch = useDispatch()

  const categories = useSelector(selectCategories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div>
      <List style={{width: '100%'}} disablePadding>
        {categories.map((item) => (
          <CategoriesMenuItem category={item} key={item.id} padding={5}/>
        ))}
      </List>
    </div>
  )
}


const CategoriesMenuItem = ({category, padding}) => {
  const isExpandable = category && category.children.length > 0
  const [open, setOpen] = React.useState(false)
  const {name, children} = category
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(`/catalogue/category/${category.id}/`)
  }

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <ListItem style={{paddingLeft: padding, cursor: 'pointer'}}>
      <ListItemText button primary={name} onClick={navigateTo}/>
      {isExpandable && !open && <ExpandMoreIcon onClick={handleClick}/>}
      {isExpandable && open && <ExpandLessIcon onClick={handleClick}/>}
    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider/>
      <List component="div" disablePadding>
        {children.map((item) => (
          <CategoriesMenuItem category={item} key={item.id} padding={2 * padding}/>
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}
