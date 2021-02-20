const convertPixelToRem = (pixelValue: number): string => {
	const basePixel = 16;
	return `${pixelValue / basePixel}rem`;
};

export default convertPixelToRem;
