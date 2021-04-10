import { PieChart, Pie, Cell } from 'recharts';

export default function Diagram({ rightAnswer, totalQuestions }) {
  console.log(
    '🚀 ~ file: Diagram.js ~ line 4 ~ Diagram ~ totalQuestion',
    totalQuestions,
  );
  console.log(
    '🚀 ~ file: Diagram.js ~ line 4 ~ Diagram ~ rightAnswer',
    rightAnswer,
  );

  const data = [
    { name: 'Correct', value: rightAnswer },
    { name: 'Incorrect', value: totalQuestions - rightAnswer },
  ];

  const COLORS = ['#FF6B01', '#D7D7D7'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const renderPieDiagram = (
    <>
      <PieChart width={284} height={284}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={142}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );

  return (
    <div>
      <div>{renderPieDiagram}</div>
    </div>
  );
}
