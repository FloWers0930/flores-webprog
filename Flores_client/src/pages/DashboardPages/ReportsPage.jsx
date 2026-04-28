import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function ReportsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Sales by Quarter
          </Typography>
          <BarChart
            series={[
              { data: [35, 44, 24, 34], label: "Product A" },
              { data: [51, 6, 49, 30], label: "Product B" },
              { data: [15, 25, 30, 50], label: "Product C" },
            ]}
            height={300}
            xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Market Share
          </Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 30, label: "Product A" },
                  { id: 1, value: 25, label: "Product B" },
                  { id: 2, value: 20, label: "Product C" },
                  { id: 3, value: 25, label: "Product D" },
                ],
              },
            ]}
            width={400}
            height={300}
          />
        </Box>
      </Stack>
    </>
  );
}

export default ReportsPage;
