import Styles from "./scss/main.module.scss";

import TenderRoutes from "./TenderRoutes";

import { Grid } from "@mui/material";

export default function App() {
  return (
    <Grid className={Styles.App}>
      <Grid className={Styles.mainContainer}>
        <TenderRoutes />
      </Grid>
    </Grid>
  );
}
