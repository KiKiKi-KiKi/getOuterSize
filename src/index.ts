import { getElementMargin, getBoundingSize } from './lib';

interface IgetOuterSize {
  width: number;
  height: number;
}

const getOuterSize = (element: HTMLElement): IgetOuterSize => {
  const { top, right, bottom, left } = getElementMargin(element);
  const { width, height } = getBoundingSize(element);

  return {
    width: width + right + left,
    height: height + top + bottom,
  };
};

export default getOuterSize;
