import Vue from 'vue';
import { TimeChart } from '@dvsl/zoomcharts';
import './../src/style/style.css';

window.ZoomChartsLicense = "";
window.ZoomChartsLicenseKey = ""; 

new Vue({
    el: '#chart',
    data() {
        return {
            options: {
                container: 'chart',
                assetsUrlBase: './dist/assets/',
                area: { height: 350 },
                data: {
                    preloaded: {
                        values: [
                            ["2017-01-09 00:00:00", 100],
                            ["2017-01-20", 200],
                            ["2017-02-01 02:00:00", 300],
                            ["2017-02-05 15:20:00", 400],
                            ["2017-02-15 22:59:59", 500]
                        ],
                        dataLimitFrom: "2017-01-09 00:00:00",
                        dataLimitTo: "2017-02-15 22:59:59",
                        unit: 's'
                    }
                }
            }
        };
    },
    methods: {
        addChart() {
            new TimeChart(this.options);
        }
    },
    mounted() {
        this.addChart();
    }
});
