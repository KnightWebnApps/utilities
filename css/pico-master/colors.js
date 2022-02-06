const colors = require("./colors.json");
const fs = require("fs");
const color = require("@k-vyn/coloralgorithm");

// This is what will be written to the file - change black and white if nec
let content = "$black: #000 !default;\n$white: #fff !default;\n";

// Create the palette from json
const colorPalette = colors.map((palette) =>
  color.generate(palette["properties"], palette["options"])
);

colorPalette.forEach((palette, i) => {
  const getColorNumber = (i = 0) => {
    let colorNumber;
    if (i === 0) {
      colorNumber = 50;
    } else {
      colorNumber = i * 100;
    }
    return colorNumber;
  };

  const getColorString = (color, i) =>
    `$${palette[0].name.toLowerCase().trim()}-${getColorNumber(
      i
    )}: ${color.hex} !default;`;

  const colorStringArray = palette[0].colors.map((color, i) =>
    getColorString(color, i)
  );

  colorStringArray.forEach((color) => (content += color + "\n"));
});

try {
  fs.writeFileSync("./scss/themes/default/_colors.scss", content);
} catch (err) {
  if (err) {
    console.error(err);
    return;
  }
}

process.exit();
