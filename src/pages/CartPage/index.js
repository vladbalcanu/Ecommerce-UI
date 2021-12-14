import { Grid, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartProductCard from '../../components/productCartCard';
import { selectProducts } from '../../store/catalogue/selectors';
import { getProducts } from '../../store/catalogue/thunks';
import styles from './cartPage.module.css';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
export const CartPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [country, setCountry] = useState("");
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
      };
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (

        <div className={styles.cartPage}>
            <div className={styles.productGrid}>
                <Grid container spacing={5} columns={1} sx={{
                    alignContent: "left",
                    marginLeft:10

                }}>

                    {products.map(item => (

                        <Grid item xs={4}>

                            <CartProductCard product={item} />

                        </Grid>
                    ))}
                </Grid>
            </div>
            <Box sx={{
                height:900,
                width: 1200,
                display: 'inline',
                marginRight: 30,
                marginTop: 15,
                alignItems: 'normal',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 4,
                fontWeight: 'bold',
            }}>
                <Typography sx={{ marginTop: 2, marginLeft: 2, fontSize: 20 }}>
                    Total: $PRICE
                </Typography>
                <Typography sx={{ marginTop: 5, marginLeft: 2, fontSize: 20 }}>
                    Additional Comments :
                </Typography>
                <TextField sx={{
                    marginTop: 2.5,
                    marginLeft: 3.75,
                    width: 300,
                    boxShadow: 4,
                    fontSize: 20,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows={8}
                    defaultValue=""
                />
                <TextField sx={{
                    marginTop: 3,
                    marginLeft: 3.75,
                    width: 300,
                    boxShadow: 4,
                    fontSize: 20,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}
                    id="filled-basic"
                    label="Vouchers"
                />
                <Button variant="outlined" sx={{
                    marginTop: 3,
                    marginLeft: 3.75,
                    boxShadow: 4,
                    fontSize: 16,
                    width: 300,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Apply Voucher</Button>
                <Typography sx={{ marginTop: 5, marginLeft: 2, fontSize: 20 }}>
                    Shipping Details :
                </Typography>
                <FormControl variant="standard" sx={{  marginTop: 3,
                    marginLeft: 3.75,
                    width: 300,
                    boxShadow: 4,
                    fontSize: 20,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)}}>
                    <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={country}
                        onChange={handleCountryChange}
                        label="Country"
                    >
                        <MenuItem value={"Romania"}>Romania</MenuItem>
                        <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
                        <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
                    </Select>
                </FormControl>
                <TextField sx={{
                    marginTop:3,
                    marginLeft: 3.75,
                    width: 300,
                    boxShadow: 4,
                    fontSize: 20,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}
                    id="filled-basic"
                    label="City/Town"
                />
                <TextField sx={{
                    marginTop: 3,
                    marginLeft: 3.75,
                    width: 300,
                    boxShadow: 4,
                    fontSize: 20,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}
                    id="filled-basic"
                    label="Zip Code"
                />
                <Button variant="outlined" sx={{
                    marginTop: 3,
                    marginLeft: 3.75,
                    boxShadow: 4,
                    fontSize: 16,
                    width: 300,
                    backgroundColor: (theme) => alpha(theme.palette.primary.contrastText, 0.6)
                }}>Checkout Now</Button>
            </Box>


        </div>


    )


}
