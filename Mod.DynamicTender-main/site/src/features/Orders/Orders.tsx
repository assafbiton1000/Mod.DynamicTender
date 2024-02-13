import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { AppDispatch } from "src/app/store";
import { fetchOrdersAsync, selectOrders } from "./OrdersSlice";
import Styles from "./orders.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HiveIcon from "@mui/icons-material/Hive";
import HotTubIcon from "@mui/icons-material/HotTub";
import { Pagination } from "@mui/material";
import OrderHeader from "./OrderHeader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from "react-scroll-to-bottom";
import { css } from "emotion";

export default function Orders() {
  const dispatch = useDispatch<AppDispatch>();
  const Allorders = useSelector(selectOrders);
  const divOne = useRef<HTMLInputElement | null>(null);
  const divFive = useRef<HTMLInputElement | null>(null);
  const divOrdersContainer = useRef<HTMLInputElement | null>(null);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    dispatch(fetchOrdersAsync(page));
    const interval = setInterval(() => {
      dispatch(fetchOrdersAsync(page));
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch, page]);

  const scrollFun = (id: string, cardId: string, way: string) => {
    document.querySelector(`#id${id}_${cardId}`)?.scroll({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (event, value) => {
    setPage(value);
    value ? dispatch(fetchOrdersAsync(value)) : "";
  };

  const countPages = Allorders?.Orders
    ? Math.ceil(Allorders?.Orders?.total / 4)
    : 1;

  const itemCounter = (value, index) => {
    return value.filter((x) => x == index).length;
  };

  const scrollToBottom = useScrollToBottom();
  const [sticky] = useSticky();

  return (
    <>
      <Grid container item xs={12}>
        {countPages > 0 && (
          <Grid item container className={Styles.Pagination}>
            <Pagination
              count={countPages}
              onChange={handleChange}
              page={page}
            />
          </Grid>
        )}
        {Allorders?.Orders?.orders?.map((item: any, cardId: any) => {
          return (
            <Grid
              className={Styles.OrdersContainer}
              ref={divOrdersContainer}
              item
              container
              xs={12}
            >
              <Grid>
                <OrderHeader props={item} />
              </Grid>
              <ScrollToBottom>
                <Grid>
                  {item?.items &&
                    item?.items?.map((itemx, index) => {
                      return (
                        <Grid
                          id={`id${index}_${cardId}`}
                          ref={divOne}
                          className={Styles.OrderSubItem}
                          item
                          container
                          key={index}
                        >
                          <Grid item container>
                            <Grid item>
                              {" "}
                              <AcUnitIcon />
                            </Grid>
                            <Grid item>{itemx.description}</Grid>
                          </Grid>
                          {itemx?.items &&
                            itemx?.items?.map((itemxx, indexx) => {
                              return (
                                <Grid
                                  className={Styles.OrderSubItemx}
                                  item
                                  container
                                  key={indexx}
                                >
                                  <CardGiftcardIcon /> {itemxx.description}
                                  {itemxx?.items &&
                                    itemxx?.items?.map((itemxxx, indexxx) => {
                                      return (
                                        <Grid
                                          className={Styles.OrderSubItemx}
                                          item
                                          container
                                          key={indexxx}
                                        >
                                          <HiveIcon /> {itemxxx.description}
                                          {itemxxx?.items &&
                                            itemxxx?.items?.map(
                                              (itemxxxx, indexxxx) => {
                                                return (
                                                  <Grid
                                                    className={
                                                      Styles.OrderSubItemx
                                                    }
                                                    item
                                                    container
                                                    key={indexxxx}
                                                  >
                                                    <HotTubIcon />{" "}
                                                    {itemxxxx.description}
                                                  </Grid>
                                                );
                                              }
                                            )}
                                        </Grid>
                                      );
                                    })}
                                </Grid>
                              );
                            })}
                        </Grid>
                      );
                    })}
                </Grid>
              </ScrollToBottom>
              <Grid item className={Styles.ScrollArrowsContainer}>
                <Grid container className={Styles.ScrollArrowsDiv}>
                  <Grid item className={Styles.ArrowUpwardIcon}>
                    <button
                      key={`ArrowUpwardIcon`}
                      onClick={() => scrollFun("4", cardId, "down")}
                    >
                      <ArrowUpwardIcon />
                    </button>
                  </Grid>
                  <Grid item className={Styles.ArrowDownwardIcon}>
                    <button
                      key={`ArrowDownwardIcon`}
                      onClick={() => scrollFun("2", cardId, "up")}
                    >
                      <ArrowDownwardIcon />
                      <button onClick={scrollToBottom}>
                        Click me to scroll to bottom
                      </button>
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
