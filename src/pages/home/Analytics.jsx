import BarCharts from "../../components/BarCharts";
import CircleChart from "../../components/ApexChart";
import ApexChart from "../../components/ApexChart";

const Analytics = () => {

    const amountInfo = [
        {
            number: "$300,000",
            text: "My Goal"
        },
        {
            number: "59%",
            text: "Goal Achieved"
        },
        {
            number: "$300",
            text: "Est. Monthly Income"
        }
    ]
    return (
        <div className="p-5">
            <div>
                <p>Retirement Income</p>
                <p>Starting Year 2056</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 w-full">
                {
                    amountInfo.map((info, idx) => {
                        return (
                            <div key={idx} className="space-y-3">
                                <p className="text-3xl font-bold">{info.number}</p>
                                <p>{info.text}</p>
                                <div className="border-b border-mainColor border"></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-100">
                <BarCharts />
            </div>
            <div>
                <div>
                    <h3 className="font-bold text-xl mt-8">How do I Compare to my peers?</h3>
                    <p>These numbers represent current goal achievement</p>
                </div>
                <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-4 w-full">
                    <div className="lg:col-span-2 mt-4">
                        <p><span className="font-bold">Age:</span> Under 30</p>
                        <hr className="my-4" />
                        <p><span className="font-bold">Salary:</span> K 20 - k30</p>
                        <hr className="my-4" />
                        <p><span className="font-bold">Gender:</span> Male</p>
                        <hr className="my-4" />
                    </div>
                    <ApexChart />
                    <ApexChart />
                    <ApexChart />
                </div>
            </div>
        </div>
    );
};

export default Analytics;