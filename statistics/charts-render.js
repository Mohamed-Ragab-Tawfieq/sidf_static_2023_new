const geographicalChart = '[geographical-chart]';
const geographicalLegend = '[geographical-chart-legends]';
const sectoralChart = '[sectoral-chart]';
const sectoralLegend = '[sectoral-chart-legends]';

let geographicalChartEl;
let geographicalChartLegendEL;
let myGeographicalChart;
let sectoralChartEl;
let sectoralChartLegendEL;
let mySectoralChart;

geographicalChartEl = document.querySelector(geographicalChart);
geographicalChartLegendEL = document.querySelector(geographicalLegend);
sectoralChartEl = document.querySelector(sectoralChart);
sectoralChartLegendEL = document.querySelector(sectoralLegend);

const renderGeographicalChart = () => {
    values = [51, 34, 4, 3, 3];
    total = values.reduce((accumulator, curr) => accumulator + curr);
    const labels = [
        'مكة المكرمة',
        'المنطقة الشرقية',
        'الرياض',
        'المدينة المنورة',
        'المناطق الأخري',
    ];

    const ctx = geographicalChartEl.getContext('2d');
    myGeographicalChart = new Chart(
        ctx,
        geographicalChartConfig({ values, labels })
    );
    geographicalChartLegendEL.innerHTML = myGeographicalChart.generateLegend();
    bindChartEvents(myGeographicalChart, document);
};

const renderSectoralChart = () => {
    values = [8.3, 2.8, 5, 3, 0.3];
    total = values.reduce((accumulator, curr) => accumulator + curr);
    const labels = [
        'الهندسة',
        'الكيميائية',
        'الإستهلاكية',
        'مواد بناء',
        'الصناعات الأخري',
    ];

    const ctx = sectoralChartEl.getContext('2d');
    mySectoralChart = new Chart(ctx, sectoralChartConfig({ values, labels }));
    sectoralChartLegendEL.innerHTML = mySectoralChart.generateLegend();
    bindChartEvents(mySectoralChart, document);
};

const geographicalChartConfig = ({ values, labels }) => {
    return {
        type: 'polarArea',
        data: {
            labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: [
                        '#96B76D',
                        '#E5AE5D',
                        '#BC6075',
                        '#5F92BA',
                        '#E7F5FC',
                    ],
                    borderWidth: 5,
                },
            ],
        },
        options: {
            title: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItem, data) => {
                        const label = data.labels[tooltipItem.index];
                        const val =
                            data.datasets[tooltipItem.datasetIndex].data[
                                tooltipItem.index
                            ];
                        return `${label}: ${val} مليار ريال`;
                    },
                },
            },
            legend: {
                position: 'bottom',
                display: false,
            },
            legendCallback: (chart) => {
                const renderLabels = (chart) => {
                    const { data } = chart;
                    return data.datasets[0].data
                        .map(
                            (_, i) =>
                                `<li>
                                                <div id="legend-${i}-item" class="legend-item">
                                                   <div>
                                                     <span class="label-bullet" style="background-color: ${
                                                         data.datasets[0]
                                                             .backgroundColor[i]
                                                     }"></span>
                                                     ${
                                                         data.labels[i] &&
                                                         `<label class="label h4">${data.labels[i]} | <span class="text-success">${data.datasets[0].data[i]}</span> مليار ريال</label>`
                                                     }
                                                   </div>
                                                    <span class="line"></span>
                                                    <span class="percent">${(
                                                        data.datasets[0].data[
                                                            i
                                                        ] / total
                                                    ).toFixed(2)} %</span>
                                                </div>
                                            </li>
                                            `
                        )
                        .join('');
                };
                return `
                            <ul class="chartjs-legend">
                                ${renderLabels(chart)}
                            </ul>`;
            },
            responsive: true,
        },
    };
};

const sectoralChartConfig = ({ values, labels }) => {
    return {
        type: 'polarArea',
        data: {
            labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: [
                        '#5F92BA',
                        '#5F92BA',
                        '#5F92BA',
                        '#5F92BA',
                        '#5F92BA',
                    ],
                    borderAlign: 'inner',
                    borderWidth: 3,
                    hoverBorderWidth: 7,
                    hoverBackgroundColor: '#1d4d8b',
                },
            ],
        },
        options: {
            title: {
                display: false,
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItem, data) => {
                        const label = data.labels[tooltipItem.index];
                        const val =
                            data.datasets[tooltipItem.datasetIndex].data[
                                tooltipItem.index
                            ];
                        return `${label}: ${val} مليار ريال`;
                    },
                },
            },
            legend: {
                position: 'bottom',
                display: false,
            },
            legendCallback: (chart) => {
                const renderLabels = (chart) => {
                    const { data } = chart;
                    return data.datasets[0].data
                        .map(
                            (_, i) =>
                                `<li>
                                                <div id="legend-${i}-item" class="legend-item">
                                                   <div>
                                                     <span class="label-bullet" style="background-color: ${
                                                         data.datasets[0]
                                                             .backgroundColor[i]
                                                     }"></span>
                                                     ${
                                                         data.labels[i] &&
                                                         `<label class="label h4">${data.labels[i]} | <span class="text-success">${data.datasets[0].data[i]}</span> مليار ريال</label>`
                                                     }
                                                   </div>
                                                    <span class="line"></span>
                                                    <span class="percent">${(
                                                        data.datasets[0].data[
                                                            i
                                                        ] / total
                                                    ).toFixed(2)} %</span>
                                                </div>
                                            </li>
                                            `
                        )
                        .join('');
                };
                return `
                            <ul class="chartjs-legend">
                                ${renderLabels(chart)}
                            </ul>`;
            },
            responsive: true,
        },
    };
};

const bindChartEvents = (myGeographicalChart, containerElement) => {
    const legendItemSelector = '.legend-item';
    const labelSeletor = '.label';

    const legendItems = [
        ...containerElement.querySelectorAll(legendItemSelector),
    ];
    legendItems.forEach((item, i) => {
        item.addEventListener('click', (e) =>
            updateDataset(e.target.parentNode, i)
        );
    });

    const updateDataset = (currentEl, index) => {
        const meta = myGeographicalChart.getDatasetMeta(0);
        const labelEl = currentEl.querySelector(labelSeletor);
        const result = meta.data[index].hidden === true ? false : true;
        if (result === true) {
            meta.data[index].hidden = true;
            labelEl.style.textDecoration = 'line-through';
        } else {
            labelEl.style.textDecoration = 'none';
            meta.data[index].hidden = false;
        }
        myGeographicalChart.update();
    };
};

renderGeographicalChart();
renderSectoralChart();
