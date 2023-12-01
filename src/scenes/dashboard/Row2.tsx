import DashboardBox from "@/components/DashboardBox";
import { useGetProductsQuery } from "@/state/api";

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetProductsQuery();
  console.log("data", data);
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row1;
