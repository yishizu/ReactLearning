import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "@mui/material/styles";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display ="flex" justifyContent ="space-between" alignItems ="center">
        <Header title="ダッシュボード" subtitle="ようこそ、ダッシュボードへ" />
      </Box>
    </Box>
  );
};

export default Dashboard;
