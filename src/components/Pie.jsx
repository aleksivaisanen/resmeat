import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';

export const PieChart = ({ data, width, height }) => {

  const innerWidth = 300 - 20;
  const innerHeight = 300 - 20;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const donutThickness = 50;

  return (
    <svg width={300} height={300}>
      <Group top={150} left={150}>
        <Pie
          data={data}
          pieValue={d => d.value}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}>
          {(pie) => {
            return pie.arcs.map((arc, index) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
              const arcFill = ["#FDF1EC", "#EEF0F2", "#134074", "#13315C"];
              return (
                <g key={`arc-${arc.data.value}-${index}`}>
                  <path d={pie.path(arc)} fill={arcFill[index]} />
                  {hasSpaceForLabel && (
                    <text
                      x={centroidX}
                      y={centroidY}
                      dy=".33em"
                      fill="#ffffff"
                      fontSize={22}
                      textAnchor="middle"
                      pointerEvents="none"
                    >
                      {arc.data.value}
                    </text>
                  )}
                </g>
              );
            })
          }}
        </Pie>
        <text className="innerText">A</text>
      </Group>
    </svg>
  )
}

export default PieChart;