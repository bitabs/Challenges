import React from "react";
import { Box, Card, Grid } from "@mui/material";
import { Feature, MultiPolygon } from "geojson";

import { BoatMaterialsPie } from "./materials-pie-chart";
import { Header } from "./header";
import { Map } from "./map";
import { RampTable } from "./table";
import { RampData, RampProperties } from "./types";

export const App = () => {
  const [data, setData] = React.useState<RampData | undefined>(undefined);
  const [visibleFeatures, setVisibleFeatures] = React.useState<
    Feature<MultiPolygon, RampProperties>[] | []
  >([]);

  const getData = async () => {
    const results = await fetch("./data.json");
    setData(await results.json());
  };

  getData();

  React.useEffect(() => {
    if (data?.features && !visibleFeatures.length) {
      setVisibleFeatures(data?.features);
    }
  }, [data]);

  return data === undefined ? (
    <div>Loading...</div>
  ) : (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }} margin={3}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card elevation={2} sx={{ height: 400 }}>
              <Map
                ramps={data}
                visibleFeatures={visibleFeatures}
                setVisibleFeatures={setVisibleFeatures}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card elevation={2} sx={{ height: 400 }}>
              <BoatMaterialsPie ramps={data} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={2} sx={{ overflow: "hidden" }}>
              <RampTable ramps={visibleFeatures} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
