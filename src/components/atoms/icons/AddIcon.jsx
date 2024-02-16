import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    fill={props.color ? props.color : "blue"}
    viewBox="0 0 24 24"
    width={50}
    height={50}
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4Z" />
  </Svg>
);
export default SvgComponent;
