import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DeleteIcon = (props) => (
  <Svg
    fill={props.color ? props.color : "red"}
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2ZM9 9v8h2V9H9Zm4 0v8h2V9h-2Z" />
  </Svg>
);
export default DeleteIcon;
