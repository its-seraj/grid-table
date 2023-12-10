const chipColorMapper = {
  Active: {
    background: "var(--custom-colors-green-100, #F0FFF8)",
    color: "var(--custom-colors-green-600, #00974F)",
  },
  Offline: {
    background: "var(--neutral-colors-500, #F0F0F2)",
    color: "var(--neutral-colors-text-gray, #615E83)",
  },
  Design: {
    background: "var(--custom-colors-magenta-100, #F4F2FF)",
    color: "var(--custom-colors-magenta-600, #5A21DB)",
  },
  Product: {
    background: "var(--custom-colors-blue-100, #F0F7FF)",
    color: "var(--custom-colors-blue-600, #004FCF)",
  },
  "Software Engineer": {
    background: "var(--custom-colors-green-100, #F0FFF8)",
    color: "var(--custom-colors-green-600, #00974F)",
  },
  Operations: {
    background: "var(--custom-colors-red-100, #FFF9F9)",
    color: "var(--custom-colors-red-600, #D91A1A)",
  },
  Income: {
    background: "var(--custom-colors-green-100, #F0FFF8)",
    color: "var(--custom-colors-green-600, #00974F)",
  },
  Academic: {
    background: "var(--custom-colors-yellow-100, #FFFEF6)",
    color: "var(--custom-colors-yellow-600, #D47F00)",
  },
  "Customer Success": {
    background: "var(--custom-colors-blue-100, #F0F7FF)",
    color: "var(--custom-colors-blue-600, #004FCF)",
  },
};
const Chip = (props) => {
  const { color, background } = chipColorMapper[props.text];

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    padding: "4px 12px",
    borderRadius: "30px",
    backgroundColor: background || "#FBFBFB",
  };
  const textStyle = {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "19px",
    color: color || "#444",
  };

  return (
    <div style={boxStyle}>
      <div style={textStyle}>{props.text}</div>
    </div>
  );
};

export default Chip;
