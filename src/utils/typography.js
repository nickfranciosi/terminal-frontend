import Typography from "typography";
import colors from "./colors";

const typography = new Typography({ 
  scaleRatio: 1.6,
  baseFontSize: '20px',
  headerFontFamily: ['MaisonNeueBold', 'sans-serif'],
  bodyFontFamily: ['MaisonNeueBook', 'sans-serif'],
  baseLineHeight: 1,
  overrideStyles: () => ({
    h1: {
      color: colors.primaryText,
      fontSize: "64px",
      letterSpacing: "-1.92px",
      lineHeight: 1,
    },
    h2: {
      fontSize: "42px",
      letterSpacing: "-1.68px",
    },
    p: {
      color: colors.secondaryText,
      letterSpacing: "-0.43px",
      lineHeight: 1.6,
      opacity: 0.6,
    },
    span: {
      color: colors.higlight,
      fontFamily: ['MaisonNeueMedium', 'sans-serif'].join(','),
      fontSize: "13px",
      lineHeight: 3,
      letterSpacing: "1.14px",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: ['MaisonNeueMedium', 'sans-serif'].join(','),
      fontSize: "13px",
      color: colors.white,
      letterSpacing: "0.81px",
      textTransform: "uppercase",
    }
  })
})

export default typography
