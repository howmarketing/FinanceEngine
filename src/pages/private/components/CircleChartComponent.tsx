import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const data = {
  open: {
    title: 'Em aberto',
    value: 243
  },
  paid: {
    title: 'Paga',
    value: 4132
  },
  cancelled: {
    title: 'Cancelada',
    value: 92
  },
  disputed: {
    title: 'Contestada',
    value: 0
  },
  dispassed: {
    title: 'Repassada',
    value: 749
  },
  total: '5.216',
};

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  credits: false,
  title: {
    text: data.total,
    align: 'center',
    verticalAlign: 'middle',
    center: ['50%', '0%'],
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Total: <b>{point.y}</b><br/>' +
      'Porcentagem: <b>{point.percentage:.1f}%</b><br/>'
  },
  plotOptions: {
    pie: {
      startAngle: -360,
      endAngle: 360,
      align: 'center',
      verticalAlign: 'middle',
      //center: ['50%', '50%'],
      size: '100%'
    }
  },
  series: [{
    type: 'pie',
    zMin: 0,
    minPointSize: 5,
    innerSize: '50%',
    data: [
      [data.open.title, data.open.value],
      [data.paid.title, data.paid.value],
      [data.cancelled.title, data.cancelled.value],
      [data.disputed.title, data.disputed.value],
      [data.dispassed.title, data.dispassed.value],
    ]
  }]
};

const App = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default App;
