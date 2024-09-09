import { Button } from "@mui/material";
import "./CustomButton.css";
const ButtonComponent = (props) => {
  const buttonConfigs = {
    success: {
      backgroundColor: "green",
      color: "white",
    },
    error: {
      backgroundColor: "red",
      color: "white",
    },
    primary: {
      backgroundColor: "white",
      color: "black",
    },
    secondary: {
      backgroundColor: "black",
      color: "white",
    },
  };

  const config = buttonConfigs[props?.type] || {};
  return (
    <div className={props.className}>
      <Button
        className={`${props.className}_button ${props?.type}`}
        onClick={props?.onClick}
        disabled={props?.disabled || false}
        variant="contained"
        style={{
          wordBreak: "break-word",
          backgroundColor: props?.disabled
            ? "rgba(0, 0, 0, 0.12)"
            : props?.bgColor || config.backgroundColor || "red",
          width: "100%",
          maxWidth: props?.maxWidth || "200px",
          color: props?.disabled
            ? "rgba(0, 0, 0, 0.26)"
            : props?.color || config.color || "white",
          borderRadius: props?.borderRadius || "6px",
          height: props?.height || "30px",
          border: props?.disabled
            ? "none"
            : props?.border || props?.bgColor
            ? ""
            : "1px solid black",
          ...props?.styles,
          textTransform: 'none'
        }}
        disableRipple
      >
        {props?.label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
