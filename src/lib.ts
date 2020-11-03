interface IgetBoundingSize {
  width: number;
  height: number;
}

export const getBoundingSize = (element: HTMLElement): IgetBoundingSize => {
  const { width, height } = element.getBoundingClientRect();

  return {
    width,
    height,
  };
};

interface IgetElementMargin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export const getElementMargin = (element: HTMLElement): IgetElementMargin => {
  const styles = window.getComputedStyle(element);

  return (['top', 'right', 'bottom', 'left'] as Array<keyof IgetElementMargin>).reduce((obj, key) => {
    return {
      ...obj,
      [key]: parseFloat(styles.getPropertyValue(`margin-${key}`)) || 0,
    };
  }, {} as Partial<IgetElementMargin>) as IgetElementMargin;
};
