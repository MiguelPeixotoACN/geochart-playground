import React from "react";
import { Chart } from "react-google-charts";


export default function App() {

    const data = [
        ['Country', 'Region', 'Carbon emissions (Kg CO2eq)', 'Number of VMs'],
        ['Belgium', 'europe-west1', 0.56, 1],
        ['Finland', 'europe-north1', 0.12, 1],
        ['Iowa', 'us-central1', 2.98, 4],
        ['Oregon', 'us-west1', 0.45, 2]
    ];

    const options = {
        sizeAxis: { maxSize: 28, minSize: 10 },
        displayMode: 'markers',
        colorAxis: {colors: ['#6c9f43', '#364a26']},
        backgroundColor: '#8ab4f8',
        datalessRegionColor: '#eddcc1',
        // datalessRegionColor: '#addcba',
        animation: {
        duration: 1000,
        easing: "out",
        startup: true,
        },
    };

    return (
        <>
            <h1>Carbon emissions per region (Kg CO2eq)</h1>
            <Chart
                chartType="GeoChart"
                width="80%"
                height="80%"
                data={data}
                options={options}
                mapsApiKey={"AIzaSyA30eUsNDV_Xt-hHjYLp1tys-E66uqyttQ"} />
        </>
    );
}
