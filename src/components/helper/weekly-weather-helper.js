import * as echarts from "echarts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { UniversalTransition } from "echarts/features";

export const getOption = (xAxisData, series) => {
  return {
    legend: {
      data: [],
    },
    color: "#FFFFFF",
    grid: {
      left: "15px",
      right: "15px",

      containLabel: true,
    },
    animation: false,
    toolbox: {
      feature: {
        saveAsImage: {
          show: false,
        },
      },
    },
    tooltip: {
      trigger: "axis",
      showContent: false,
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisData,
      show: true,
      position: "top",
      offset: 30,
      axisLine: {
        lineStyle: {
          color: "#FFFFFF",
        },
      },
      nameTextStyle: {
        fontWeight: "bolder",
        fontSize: 25,
      },
    },
    yAxis: {
      show: false,
    },
    series: series,
  };
};

export const xAxisData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const hourlyxAxisData = [
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
  "1AM",
];

export const itemStyle = {
  normal: {
    label: {
      color: "#FFFFFF",
      show: true,
      fontSize: 14,
      position: "top",
      formatter: function (params) {
        return params.value;
      },
    },
    labelLine: {
      show: false,
    },
  },
};

export const getSeriesForDailyChart = (dataset, weeklyData) => {
  return [
    {
      type: "line",
      stack: "Total",
      data: weeklyData.eveningData,
      itemStyle: itemStyle,
    },
    {
      type: "line",
      stack: "Total",
      itemStyle: itemStyle,
      data: weeklyData.morningData,
    },
  ];
};

export const getSeriesForHourlyChart = () => {
  return [
    {
      type: "line",
      stack: "Total",
      data: [12, 22, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11, 13],
      itemStyle: itemStyle,
    },
  ];
};

export const handleMorningAndEveningData = (weeklyDataList) => {
  const morningData = [];
  const eveningData = [];

  weeklyDataList.forEach((day) => {
    morningData.push(Math.floor(day.feels_like.morn));
    eveningData.push(Math.floor(day.feels_like.night));
  });

  return { morningData, eveningData };
};

export const handleWeatherDetailsData = (weeklyData) => {
  return {
    weatherStatus: `Mostly ${weeklyData.weather[0].main}, ${Math.floor(
      weeklyData.feels_like.morn
    )}- ${Math.floor(weeklyData.feels_like.night)}°C`,
    weatherTip: [
      { name: "wind", value: weeklyData.speed },
      {
        name: "Sunset/Sunrise",
        value: `${calculateUnixTime(weeklyData.sunrise)}/${calculateUnixTime(
          weeklyData.sunset
        )}`,
      },
    ],
  };
};

export const calculateUnixTime = (unix_timestamp) => {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();

  // Will display time in 10:30 format
  return hours + ":" + Math.floor(minutes);
};

export const calculateSelectedColumn = (offsetX, highlightWidth) => {
  const resultPoint = offsetX / highlightWidth;

  // if the resultPoint is not integer ve add it up to 1, else we get
  // the resultPoint and find the selected column of chart
  return resultPoint % 1 === 0 ? resultPoint : Math.ceil(resultPoint);
};

export const initChart = (chartRef) => {
  echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition,
  ]);

  return echarts.init(chartRef);
};
