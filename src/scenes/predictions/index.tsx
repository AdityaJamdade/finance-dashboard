import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useState } from "react";

type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  return (
    <DashboardBox
      width="100%"
      height="100%"
      p="1rem"
      overflow="hidden"
    ></DashboardBox>
  );
};

export default Predictions;
