"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DougnutCHart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [12, 12 ,2],
                backgroundColor : ['#0747b6', '#2265d8', '2f91fa']
            }
        ],
        labels : ['Banks 1', 'Bank 2', 'Bank 3' ]
    }
  return <
    Doughnut data = {data}
    options = {{
        cutout : '60%',
        plugins: {
            legend : {
                display: false
            }
        }
    }}
  />
}

export default DougnutCHart