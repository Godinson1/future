import { Helmet } from "react-helmet";
import ApexCharts from "apexcharts";

interface FutureChartProps {
  id: string;
  chart_name: any;
  option_name: any;
  apex_options: any;
}

const FutureChart = ({ id, chart_name, option_name, apex_options }: FutureChartProps) => {
  const apexChart = new ApexCharts(document.getElementById(id), option_name);
  window[option_name] = apex_options;

  const options = window[chart_name];
  // @ts-ignore
  if (options?.updateOptions) {
    // @ts-ignore
    options.updateOptions(options);
  }

  return (
    <div id={id} style={{ margin: "0 10px" }}>
      <Helmet>
        <script>{`
           var ${chart_name} = ${apexChart};
           ${chart_name.render()};
        `}</script>
      </Helmet>
    </div>
  );
};

export default FutureChart;
