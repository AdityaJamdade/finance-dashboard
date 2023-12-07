import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";

type Props = {};

const Row1 = (props: Props) => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("Data", transactionsData);
  
  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row1;
