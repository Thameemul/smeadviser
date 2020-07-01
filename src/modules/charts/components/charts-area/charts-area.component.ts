import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-charts-area',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-area.component.html',
    styleUrls: ['charts-area.component.scss'],
})
export class ChartsAreaComponent implements OnInit, AfterViewInit {
    @ViewChild('myAreaChart') myAreaChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myAreaChart.nativeElement, {
            type: 'line',
            data: {
                labels: [
                    'Jun 1',
                    'Jun 2',
                    'Jun 3',
                    'Jun 4',
                    'Jun 5',
                    'Jun 6',
                    'Jun 7',
                    'Jun 8',
                    'Jun 9',
                    'Jun 10',
                    'Jun 11',
                    'Jun 12',
                    'Jun 13',
                ],
                datasets: [
                    {
                        label: 'Questions',
                        lineTension: 0.3,
                        backgroundColor: 'rgba(2,117,216,0.2)',
                        borderColor: 'rgba(2,117,216,1)',
                        pointRadius: 5,
                        pointBackgroundColor: 'rgba(2,117,216,1)',
                        pointBorderColor: 'rgba(255,255,255,0.8)',
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(2,117,216,1)',
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        data: [
                            11,
                            22,
                            31,
                            45,
                            55,
                            65,
                            75,
                            85,
                            95,
                            100,
                            150,
                            200,
                            350,
                        ],
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'day',
                            },
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                maxTicksLimit: 7,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 500,
                                maxTicksLimit: 5,
                            },
                            gridLines: {
                                color: 'rgba(0, 0, 0, .125)',
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
            },
        });
    }
}
