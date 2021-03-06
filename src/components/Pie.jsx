import Pie from '@visx/shape/lib/shapes/Pie';
import { Group } from '@visx/group';
import { localPoint } from '@visx/event';
import { makeStyles } from '@material-ui/core';
import { useTooltip, useTooltipInPortal } from '@visx/tooltip';

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  innerText: {
    x: "-10px",
    fontSize: '3rem'
  }
})


const scale = {
  1: "D",
  2: "C",
  3: "B",
  4: "A",
  5: 'A+'
}


export const PieChart = ({ data, innerText, active, setActive }) => {
  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    // use TooltipWithBounds
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true,
  })

  const classes = useStyles();
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();


  const innerWidth = 250 - 20;
  const innerHeight = 250 - 20;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const donutThickness = 40;


  const handleMouseOver = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: datum
    });
  };

  const handleActive = (key) => {
    if (active === key) {
      setActive(null);
      return;
    }
    setActive(key)
  }

  return (
    <div className={classes.container}>
      <svg width={250} height={250} ref={containerRef}>
        <Group top={125} left={125}>
          <Pie
            data={[{ value: 1 }]}
            pieValue={p => p.value}
            outerRadius={radius}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                return (
                  <g key={`arc-${arc.data.value}-${index}`}>
                    <path d={pie.path(arc)} fill="white" />
                  </g>
                );
              })
            }}
          </Pie>
          <Pie
            data={data}
            pieValue={d => d.value}
            outerRadius={radius}
            innerRadius={radius - donutThickness}
            cornerRadius={2}
            padAngle={0.02}
          >
            {(pie) => {
              return pie.arcs.map((arc, index) => {
                const [centroidX, centroidY] = pie.path.centroid(arc);
                const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
                const arcFill = {
                  welfare: "#ffcc30",
                  water: "#6A994E",
                  carbon: "#457b9d"
                };
                return (
                  <g key={`arc-${arc.data.value}-${index}`}>
                    <path d={pie.path(arc)} fill={arcFill[arc.data.label]}
                      onMouseOver={(e) => handleMouseOver(e, arc.data)}
                      onMouseOut={hideTooltip}
                      onClick={() => handleActive(arc.data.label)}
                    />
                    {hasSpaceForLabel && (
                      <text
                        x={centroidX}
                        y={centroidY}
                        dy=".33em"
                        fill={arcFill[arcFill.length - 1 - index]}
                        fontSize={22}
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {scale[arc.data.value]}
                      </text>
                    )}
                  </g>
                );
              })
            }}
          </Pie>
          <text x={innerText === "A+" ? "-25px" : "-15px"} y="20px" className={classes.innerText}>{innerText}</text>
        </Group>
      </svg>
      {tooltipOpen && (
        <TooltipInPortal
          // set this to random so it correctly updates with parent bounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
        >
          <div>{tooltipData.label}</div>
          <div>{tooltipData.value}</div>
        </TooltipInPortal>
      )}
    </div>
  )
}

export default PieChart;