sap.ui.define([], function () {
    "use strict";
    return {
        getDatasets: function (input) {
            console.log("Input data");
            console.log(input.workday);
            var datasets = [
                    {
                        label: "Workday",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        spanGaps: false
                    },
                    {
                        label: "Weekend",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(50,20,185,0.4)",
                        borderColor: "rgba(50,20,185,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(50,20,185,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(50,20,185,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [10, 0, 30, 40, 50, 60, 50, 45, 18, 56, 55, 40],
                        spanGaps: false
                    }

                ];
            
//            lineChartData.datasets[0].data = input.workday;
//            lineChartData.datasets[0].label = "Všední den";
//            lineChartData.datasets[0].data = [10,20,30,40,50,60];            
            console.log(datasets);
            return datasets;
//            return {};
        }

    };
});