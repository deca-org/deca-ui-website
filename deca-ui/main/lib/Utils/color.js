"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexRgb = exports.createPalette = exports.getStaticColor = void 0;
const stitches_config_1 = require("../Theme/stitches.config");
const polished_1 = require("polished");
const getStaticColor = (varColor) => {
    return stitches_config_1.theme.colors[varColor].value;
};
exports.getStaticColor = getStaticColor;
const generatePalette = (color) => {
    const colors = [];
    colors.push(color);
    colors.push([`${color[0]}-darken-1`, (0, polished_1.darken)(0.055, color[1])]);
    colors.push([`${color[0]}-darken-2`, (0, polished_1.darken)(0.09, color[1])]);
    colors.push([`${color[0]}-darken-3`, (0, polished_1.darken)(0.125, color[1])]);
    colors.push([`${color[0]}-darken-4`, (0, polished_1.darken)(0.256, color[1])]);
    colors.push([
        `${color[0]}-lighten-1`,
        (0, polished_1.transparentize)(0.15, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-2`,
        (0, polished_1.transparentize)(0.25, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-3`,
        (0, polished_1.transparentize)(0.5, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-4`,
        (0, polished_1.transparentize)(0.65, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-5`,
        (0, polished_1.transparentize)(0.78, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-6`,
        (0, polished_1.transparentize)(0.85, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-7`,
        (0, polished_1.transparentize)(0.9, color[1]),
    ]);
    colors.push([
        `${color[0]}-lighten-8`,
        (0, polished_1.transparentize)(0.99, color[1]),
    ]);
    colors.push([
        `${color[0]}-readable`,
        (0, polished_1.readableColor)((0, polished_1.darken)(0.225, color[1]), (0, exports.getStaticColor)('white'), (0, exports.getStaticColor)('black')),
    ]);
    return colors;
};
const createPalette = (colorObj) => {
    const modifiedColors = [];
    Object.entries(colorObj).map((color) => {
        // variable color
        if (color[1].charAt(0) === '$') {
            color[1] = (0, exports.getStaticColor)(color[1].substring(1));
        }
        modifiedColors.push(...generatePalette(color));
    });
    return Object.fromEntries(modifiedColors);
};
exports.createPalette = createPalette;
const hexRgb = (hex, options = {}) => {
    const hexCharacters = 'a-f\\d';
    const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
    const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
    const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
    const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');
    if (typeof hex !== 'string' ||
        nonHexChars.test(hex) ||
        !validHexSize.test(hex)) {
        throw new TypeError('Expected a valid hex string');
    }
    hex = hex.replace(/^#/, '');
    let alphaFromHex = 1;
    if (hex.length === 8) {
        alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6);
    }
    if (hex.length === 4) {
        alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
        hex = hex.slice(0, 3);
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;
    return { red, green, blue, alpha };
};
exports.hexRgb = hexRgb;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL1V0aWxzL2NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUFtRDtBQUNuRCx1Q0FBaUU7QUFFMUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxRQUFnQixFQUFVLEVBQUU7SUFDekQsT0FBTyx1QkFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFxQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQUZXLFFBQUEsY0FBYyxrQkFFekI7QUFFRixNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQWUsRUFBRSxFQUFFO0lBQzFDLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWlCLENBQUMsQ0FBQztJQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFBLGlCQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFBLGlCQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFBLGlCQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFBLGlCQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFD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