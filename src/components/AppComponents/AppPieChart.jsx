import classes from "./AppPieChart.module.css";

import { useSelector } from "react-redux";

import { ResponsivePie } from "@nivo/pie";

import { determineEnableLabels } from "../../util/util";

import AppCellContainer from "./AppCellContainer";

function AppPieChart({ title, data }) {
  const symbol = useSelector((state) => state.general.symbol);

  const enableLabels = determineEnableLabels(620);

  return (
    <AppCellContainer>
      <h3>{title}</h3>
      {data.length > 0 && (
        <div className={classes.container}>
          <ResponsivePie
            data={data}
            colors={({ data }) => data.color}
            margin={{ top: 30, right: 120, bottom: 30, left: 0 }}
            arcLinkLabelsTextColor="#222"
            enableArcLinkLabels={enableLabels}
            arcLabel={(item) => `${item.value}${symbol}`}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 115,
                translateY: 0,
                itemsSpacing: 8,
                itemWidth: 100,
                itemHeight: 10,
                itemTextColor: "#222",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 16,
                symbolShape: "circle",
              },
            ]}
          />
        </div>
      )}
      {data.length <= 0 && (
        <div className={classes.container}>
          <span className="message">No data yet</span>
        </div>
      )}
    </AppCellContainer>
  );
}

export default AppPieChart;
