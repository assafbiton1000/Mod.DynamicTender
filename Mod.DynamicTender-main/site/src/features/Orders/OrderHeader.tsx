import { Grid } from "@mui/material";
import Styles from "./orders.module.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
export default function OrderHeader(props: any) {
  return (
    <>
      <Grid
        item
        container
        className={`${Styles.OrderHeader} ${Styles[props.props.saleType]}`}
      >
        <Grid className={Styles.DeliveryIcon}>
          <Grid item>
            {" "}
            <DeliveryDiningIcon fontSize="large" />
          </Grid>{" "}
          <Grid item>{props.props.saleType}</Grid>
        </Grid>
        <Grid className={Styles.orderId}>{props.props.orderId}</Grid>
      </Grid>
    </>
  );
}
