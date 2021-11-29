<template>
    <div class="row container-fluid text-center col-auto">
        <div class="col-6">
            <div id="container"></div>
            <div v-if="estado == 0">
                <button @click="iniciar_grafico()" type="button" class="btn btn-success mt-2">Iniciar grafico RAM libre</button>
            </div>
        </div>
        <div class="col-6">
            <div id="container2"></div>
            <div v-if="estado2 == 0">
                <button @click="iniciar_grafico2()" type="button" class="btn btn-success mt-2">Iniciar grafico RAM en uso</button>
            </div>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);
export default {
    name: 'GraficosIndicador',
    data(){
        return {
            valor_mem_free:'',
            valor_mem_used:'',
            descripcion_mem_free:'',
            descripcion_mem_used:'',
            clienteIP:'',
            cliente_razon:'',
            estado: 0,
            estado2: 0,
        }
    },
    methods: {
        addIndicadores(){
            const socket = io(this.clienteIP)
            //CPU FREE
            socket.on('mem-info', (objeto) => {
                this.valor_mem_free = objeto.dataLibre
                this.descripcion_mem_free = objeto.descLibre
            });
            socket.on('mem-info', (objeto) => {
                this.valor_mem_used = objeto.dataUtil
                this.descripcion_mem_used = objeto.descUtil
            });
        },
        traerCliente(){
            this.clienteIP = "http://" + localStorage.getItem("localIP");
            this.cliente_razon = localStorage.getItem("localRZ");
        },
        iniciar_grafico()
        {
            this.estado = 1
            const socket = io(this.clienteIP)
            Highcharts.chart('container', {
                chart: {
                    type: 'line',
                    animation: Highcharts.svg,
                    marginRight: 10,
                    events: {
                        load: function () {
                       
                                var series = this.series[0];
                                socket.on('mem-info', function(num){
                                    var x = (new Date()).getTime();
                                    console.log(num.dataLibre2)
                                    series.addPoint([x, parseInt(num.dataLibre2)], true, true);
                                }); 
                        }
                    },
                    
                },
                time: {
                    useUTC: false
                },
                title: {
                    text: 'Gráfico Memoria Libre'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: ' Memoria libre porcentual (%)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 100,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}%'
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Point',
                    data: (function () {
                       
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i += 1) {
                            var y = null;
                            socket.on('mem-info', function(num){
                                y = parseInt(num.dataLibre2);
                            })
                            data.push({
                                x: time + i * 1000,
                                y: y
                            });
                            
                        }
                        return data;
                    }())
                }]
            });
        },
        iniciar_grafico2()
        {
            this.estado2 = 1
            const socket = io(this.clienteIP)
            Highcharts.chart('container2', {
                chart: {
                    type: 'line',
                    animation: Highcharts.svg,
                    marginRight: 10,
                    events: {
                        load: function () {
                       
                                var series = this.series[0];
                                socket.on('mem-info', function(num){
                                    var x = (new Date()).getTime();
                                    series.addPoint([x, parseInt(num.dataUtil2)], true, true);
                                }); 
                        }
                    },
                    
                },
                time: {
                    useUTC: false
                },
                title: {
                    text: 'Gráfico Memoria en uso'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: ' Memoria en uso porcentual (%)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 100,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}%'
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Point',
                    data: (function () {
                       
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i += 1) {
                            var y = null;
                            socket.on('mem-info', function(num){
                                y = parseInt(num.dataUtil2);
                            })
                            data.push({
                                x: time + i * 1000,
                                y: y
                            });
                            
                        }
                        return data;
                    }())
                }]
            });
        },
        aplicar_tema(){
            Highcharts.theme = {
                colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, '#2a2a2b'],
                            [1, '#3e3e40']
                        ]
                    },
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase',
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase'
                    }
                },
                xAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: '#F0F0F3',
                            style: {
                                fontSize: '13px'
                            }
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    boxplot: {
                        fillColor: '#505053'
                    },
                    candlestick: {
                        lineColor: 'white'
                    },
                    errorbar: {
                        color: 'white'
                    }
                },
                legend: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    itemStyle: {
                        color: '#E0E0E3'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#606063'
                    },
                    title: {
                        style: {
                            color: '#C0C0C0'
                        }
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                labels: {
                    style: {
                        color: '#707073'
                    }
                },
                drilldown: {
                    activeAxisLabelStyle: {
                        color: '#F0F0F3'
                    },
                    activeDataLabelStyle: {
                        color: '#F0F0F3'
                    }
                },
                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: '#505053'
                        }
                    }
                },
                rangeSelector: {
                    buttonTheme: {
                        fill: '#505053',
                        stroke: '#000000',
                        style: {
                            color: '#CCC'
                        },
                        states: {
                            hover: {
                                fill: '#707073',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: '#000003',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    },
                    inputBoxBorderColor: '#505053',
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },
                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(255,255,255,0.1)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    },
                    xAxis: {
                        gridLineColor: '#505053'
                    }
                },
                scrollbar: {
                    barBackgroundColor: '#808083',
                    barBorderColor: '#808083',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: '#606063',
                    buttonBorderColor: '#606063',
                    rifleColor: '#FFF',
                    trackBackgroundColor: '#404043',
                    trackBorderColor: '#404043'
                }
            };
            Highcharts.setOptions(Highcharts.theme);
        }   
    },
    mounted (){
        this.traerCliente();
        this.addIndicadores();
        this.aplicar_tema();
    }
}
</script>