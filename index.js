const colors = {
  black: "#F9FAE3", 
  lightBlack: "#F9FAE3",
  white: "#665E4B", 
  lightWhite: "#665E4B",
  blue: "#227b4d", 
  lightBlue: "#227b4d",
  cyan: "#E07941", 
  lightCyan: "#E07941",
  green: "#669c50", 
  lightGreen: "#669c50",
  magenta: "#7189D9", 
  lightMagenta: "#7189D9",
  red: "#eb6f6f", 
  lightRed: "#eb6f6f",
  yellow: "#F2C55C", 
  lightYellow: "#F2C55C"
};
exports.decorateConfig = config =>
  Object.assign({}, config, {
    padding: "12px 30px 30px 30px",
    backgroundColor: "#F9FAE3",
    foregroundColor: "#61543E",
    cursorColor: "#61543E",
    selectionColor: "rgba(61, 53, 39, 0.3)",
    borderColor: "#F9FAE3",
    colors,
	css: `
		${config.css || ''}
		.tab_tab.tab_active {
			color: #665E4B;
		}
		.header_appTitle {
			color: #665E4B;
		}
	`
  });
