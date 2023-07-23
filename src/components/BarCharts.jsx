import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        name: "Page A",
        Employer: 10,
        Employee: 10,
        Interest: 10,
    },
    {
        name: "Page B",
        Employee: 20,
        Interest: 20,
        Employer: 20
    },
    {
        name: "Page C",
        Employee: 30,
        Interest: 30,
        Employer: 30
    },
    {
        name: "Page D",
        Employee: 40,
        Interest: 40,
        Employer: 40
    },
    {
        name: "Page E",
        Employee: 50,
        Interest: 50,
        Employer: 50
    },
    {
        name: "Page F",
        Employee: 60,
        Interest: 60,
        Employer: 60
    },
    {
        name: "Page G",
        Employee: 70,
        Interest: 70,
        Employer: 70
    }
];

const BarCharts = () => {
    return (
        <div>
            <div>
                <h3 className="font-bold text-xl mt-8">Contributions Overtime</h3>
            </div>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ padding: '20px' }} />
                        <Bar dataKey="Employer" stackId="a" fill="#0800A3" />
                        <Bar dataKey="Employee" stackId="a" fill="#4935FF" />
                        <Bar dataKey="Interest" stackId="a" fill="#85AFFF" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarCharts;
