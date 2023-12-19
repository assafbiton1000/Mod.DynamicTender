
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {AppDispatch} from "src/app/store";
import { fetchOrdersAsync, selectOrders } from "./OrdersSlice";
import Styles from "./orders.module.scss";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HiveIcon from '@mui/icons-material/Hive';
import HotTubIcon from '@mui/icons-material/HotTub';



export default function Orders() {
    const dispatch = useDispatch<AppDispatch>();
    const Allorders= useSelector(selectOrders);

    useEffect(() => {
        dispatch(fetchOrdersAsync());
        const interval = setInterval(() => {
            dispatch(fetchOrdersAsync());
        }, 2000);
        return () => clearInterval(interval);
    }, [dispatch]);


    return (
        <>

            <Grid container item  xs={12}>
                {

                    Allorders?.Orders?.orders?.map((item:any) => {
                    return (

                        <Grid className={Styles.OrdersContainer}  item container xs={12}>

                            {item?.items &&
                                item?.items?.map((itemx,index) => {
                                    return (
                                        <Grid  className={Styles.OrderSubItem} item  container key={index}>
                                             <AcUnitIcon /> {itemx.description}

                                            {
                                                itemx?.items &&
                                                    itemx?.items?.map((itemxx,indexx) => {
                                                    return (
                                                        <Grid  className={Styles.OrderSubItemx}  item container key={indexx} >
                                                            <CardGiftcardIcon /> {itemxx.description}
                                                            {
                                                                itemxx?.items &&
                                                                itemxx?.items?.map((itemxxx,indexxx) => {
                                                                    return (
                                                                        <Grid  className={Styles.OrderSubItemx}  item container key={indexxx} >
                                                                            <HiveIcon /> {itemxxx.description}
                                                                            {
                                                                                itemxxx?.items &&
                                                                                itemxxx?.items?.map((itemxxxx,indexxxx) => {
                                                                                    return (
                                                                                        <Grid  className={Styles.OrderSubItemx}  item container key={indexxxx} >
                                                                                            <HotTubIcon /> {itemxxxx.description}
                                                                                        </Grid>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Grid>
                                                                    )
                                                                })
                                                            }
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                        )
                })
                }
            </Grid>
        </>
    );
}