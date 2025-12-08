// Sample dataset
const years = [2020, 2030, 2040, 2050];
const adoption = [10, 40, 70, 90];

const data = [{
    x: years,
    y: adoption,
    type: "scatter",
    mode: "lines+markers"
}];

const layout = {
    title: "Future Adoption of Assistive AI Design Tools",
    xaxis: { title: "Year" },
    yaxis: { title: "% Adoption" }
};

Plotly.newPlot("chart", data, layout);
