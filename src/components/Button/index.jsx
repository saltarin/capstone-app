import { useMemo } from "react";
import styleCss from "./style.module.css";

export default function Button({ block, width, children, style, ...rest }) {
  const dynamicStyle = useMemo(() => {
    let blockStyle = {};
    if (block) {
      blockStyle = {
        display: "block",
        width: "100%",
      };
    }

    if (style === null) {
      return {
        ...blockStyle,
        width,
      };
    }
    return {
      ...style,
      ...blockStyle,
      width,
    };
  }, [style, block]);

  return (
    <button className={styleCss.button} style={dynamicStyle} {...rest}>
      {children}
    </button>
  );
}
