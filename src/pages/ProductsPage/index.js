import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../store/catalogue/selectors";
import { getProducts, searchProducts, } from "../../store/catalogue/thunks";
import styles from './ProductsPage.module.css';
import { selectCategories } from "../../store/categories/selectors";
import { getCategories } from "../../store/categories/thunks";
import CategoryService from "../../services/catalogue/CategoryService";
import ProductCard from "../../components/productCard";
import { InsertEmoticonTwoTone } from "@mui/icons-material";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setCategories } from "../../store/categories";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { AppBar } from "@mui/material";
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '70%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

export const ProductsPage = () => {
  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState("")
  const dispatch = useDispatch();
  const products = useSelector(selectProducts)
  const categories = useSelector(selectCategories)
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch])

  function onChangeSearch(event) {
    setSearchText(event.target.value);
  }

  function onKeyDown(event) {
    if (event.code === "Enter") {
      handleSubmit();
    }
  }

  function handleSubmit(event) {
    console.log(event);

    dispatch(searchProducts(searchText, category));
  }


  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };



  return (
    <div className={styles.productList}>

      <div className={styles.searchBar}>
        <form
          action="/"
          method="get"
          onSubmit={handleSubmit}
        >
          <label>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                type="text"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={onChangeSearch}
                borderRadius="1px"
                border="Black"
                onKeyDown={onKeyDown}
              />
              <FormControl sx={{ ml: 5, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  {categories.map(item => (
                    <MenuItem value={item.id}>{item.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Search>
          </label>
        </form>
      </div>

      <div>

        <Box sx={{
          backgroundColor: "white"
        }}>

          <AppBar position="static" sx={{
            flexGrow: 1,
            backgroundColor: "white",

          }}>

            <div className={styles.productsBox}>
              <div className={styles.selectionBox}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Category</FormLabel>
                  <RadioGroup
                    aria-label="Category"
                    defaultValue="Monitor"
                    name="radio-buttons-group"
                    paddingLeft="20px"
                    onChange={handleChange}
                  >
                    {categories.map(item => (
                      <FormControlLabel value={item.id} control={<Radio />} label={item.name} />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>

              <div className={styles.productGrid}>
                <Grid container spacing={2} columns={12} sx={{
                  alignContent: "right",

                }}>

                  {products.map(item => (

                    <Grid item xs={4}>

                      <ProductCard product={item} />

                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </AppBar>
        </Box>
      </div>
    </div>
  )
}

