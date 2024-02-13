import { Grid } from "@mui/material";
import Styles from "./orders.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HiveIcon from "@mui/icons-material/Hive";
import HotTubIcon from "@mui/icons-material/HotTub";

export default function OrdersItem(props: any) {
  return (
    <>
      {props?.items &&
        props?.items?.map((itemxxxx, indexxxx) => {
          return (
            <Grid
              className={Styles.OrderSubItemx}
              item
              container
              key={indexxxx}
            >
              <HotTubIcon /> {itemxxxx.description}
              <OrdersItem propsprops={itemxxxx} />
            </Grid>
          );
        })}
    </>
  );
}
