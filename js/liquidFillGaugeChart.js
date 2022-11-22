var dispatch = d3.dispatch('redraw');
let data = [
    { 'nombre': 'Indicador A', 'medida': 90 },
    { 'nombre': 'Indicador B', 'medida': 35 },
    { 'nombre': 'Indicador C', 'medida': 50 },
    { 'nombre': 'Indicador D', 'medida': 15 },
    { 'nombre': 'Indicador E', 'medida': 75 },
    { 'nombre': 'Indicador F', 'medida': 60 },
    { 'nombre': 'Indicador G', 'medida': 25 },

]
/******************************************************************* */

var gauges = liquidGaugeChart('#GaugePanel1');

var xf = crossfilter(data);

/*data.forEach(function (d) {
    d.medida = 1;
});*/

//Dimensiones
var gaugesDim = xf.dimension(function (d) { return d.nombre });
//Grupos
var gaugesSumGroup = gaugesDim.group().reduceSum(function (d) { return +d.medida; });

//Graficas
gauges
    .dispatch(dispatch)
    .semaforo(true)
    .group(gaugesSumGroup)

//*********** render *********** */
gauges
    .render()

dispatch.call("redraw");

/******************************* */