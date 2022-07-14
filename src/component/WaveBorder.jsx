import React from "react";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "7vw",
    minHeight: "7vw"
  },
  "@keyframes moveForever": {
    from: { transform: "translate3d(-90px, 0, 0)" },
    to: { transform: "translate3d(85px, 0, 0)" }
  },
  parallax: {
    "& > use:nth-child(1)": {
      animation: "$moveForever 7s cubic-bezier(.55, .5, .45, .5) infinite",
      animationDelay: '-2s'
    },
    "& > use:nth-child(2)": {
      animation: "$moveForever 10s cubic-bezier(.55, .5, .45, .5) infinite",
      animationDelay: '-3s'
    },
    "& > use:nth-child(3)": {
      animation: "$moveForever 13s cubic-bezier(.55, .5, .45, .5) infinite",
      animationDelay: '-5s'
    },
    "& > use:nth-child(4)": {
      animation: "$moveForever 16s cubic-bezier(.55, .5, .45, .5) infinite",
      animationDelay: '-8s'
    }
  }
});

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
function WaveBorder(props) {
  const {
    className,
    upperColor,
    waveColor1,
    waveColor2,
    waveColor3,
    waveColor4,
    animationNegativeDelay,
    ...rest
  } = props;
const classes = useStyles();


  return (
    <div className={className} style={{ background: upperColor }} {...rest}>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use href="#wave" x="48" y="0" fill={waveColor1} />
          <use href="#wave" x="48" y="0" fill={waveColor2} />
          <use href="#wave" x="48" y="0" fill={waveColor3} />
          <use href="#wave" x="48" y="0" fill={waveColor4} />
        </g>
      </svg>
    </div>
  );
}

export default WaveBorder;
