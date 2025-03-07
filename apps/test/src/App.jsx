import './App.css'
import  Chart  from "react-apexcharts";

function App() {
  return (
    <div className="backGround">
      <div className="chart">
        <Chart
            width="100%"
            height="100%"
            options={{
                chart: {
                    type: 'line',
                },
                yaxis: [
                    {
                        seriesName: 'Income',
                        labels: {
                            formatter: function (y) {
                                return y + " S1";
                            }
                        }
                    },
                    {
                        seriesName: ['Revenue', 'Revenue Tax'],
                        opposite: true,
                        labels: {
                            formatter: function (y) {
                                return y + " S2";
                            }
                        }
                    },
                ],
            }}
            series={[
                {
                    name: 'Income',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                },
                {
                    name: 'Revenue',
                    data: [20, 29, 37, 36, 44, 45, 50, 58],
                },
                {
                    name: 'Revenue Tax',
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
                },
            ]}
          />
      </div>
    </div>
  )
}

export default App
