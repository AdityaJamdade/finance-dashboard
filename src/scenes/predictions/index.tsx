import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { useTheme, Box, Typography, Button } from "@mui/material";
import { useState } from "react";

type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            Charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>

        <Button onClick={() => setIsPredictions(!isPredictions)}>
          Toggle Predictions
        </Button>
      </FlexBetween>
    </DashboardBox>
  );
};

export default Predictions;
