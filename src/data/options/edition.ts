export interface Value {
  name: string;
  property: string;
  value: string;
  range: {
    min: number;
    max: number;
  };
  unit: string;
}

export const brightness: Value = {
  name: "Brightness",
  property: "brightness",
  value: "100",
  range: {
    min: 0,
    max: 200,
  },
  unit: "%",
};

export const contrast: Value = {
  name: "Contrast",
  property: "contrast",
  value: "100",
  range: {
    min: 0,
    max: 200,
  },
  unit: "%",
};

export const saturation: Value = {
  name: "Saturation",
  property: "saturate",
  value: "100",
  range: {
    min: 0,
    max: 200,
  },
  unit: "%",
};

export const grayscale: Value = {
  name: "Grayscale",
  property: "grayscale",
  value: "0",
  range: {
    min: 0,
    max: 100,
  },
  unit: "%",
};

export const sepia: Value = {
  name: "Sepia",
  property: "sepia",
  value: "0",
  range: {
    min: 0,
    max: 100,
  },
  unit: "%",
};

export const blur: Value = {
  name: "Blur",
  property: "blur",
  value: "0",
  range: {
    min: 0,
    max: 100,
  },
  unit: "px",
};

export const hueRotate: Value = {
  name: "Hue Rotate",
  property: "hue-rotate",
  value: "0",
  range: {
    min: 0,
    max: 360,
  },
  unit: "deg",
};
