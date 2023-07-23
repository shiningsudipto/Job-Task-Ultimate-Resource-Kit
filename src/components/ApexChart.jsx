import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [78],
            options: {
                chart: {
                    height: 78,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                        dataLabels: {
                            colors: ['#22D6AA'],
                        },
                    },
                },
                labels: ['Avengers'],
            },
        };
    }

    handleUpdateData = () => {
        // Update the chart data dynamically
        this.setState({
            series: [50],
        });
    };

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={160} />
                </div>
            </div>
        );
    }
}

export default ApexChart;
