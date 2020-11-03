import { getElementMargin } from '../src/lib';

let element: HTMLElement | null = null;

beforeEach(() => {
  // setup a DOM element as a render target
  element = document.createElement('div');
  document.body.appendChild(element);
});

afterEach(() => {
  // cleanup on exiting
  element && element.remove();
  element = null;
});

describe('getElementMargin', () => {
  it('return margins from has margin elment', () => {
    const divElm = element as HTMLElement;
    divElm.setAttribute('style', 'margin: 1px 2px 3px 4px');
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(1);
    expect(right).toBe(2);
    expect(bottom).toBe(3);
    expect(left).toBe(4);
  });

  it("return margins 0 from don't have margin elment", () => {
    const divElm = element as HTMLElement;
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(0);
    expect(right).toBe(0);
    expect(bottom).toBe(0);
    expect(left).toBe(0);
  });

  it('return margins as float value', () => {
    const divElm = element as HTMLElement;
    divElm.setAttribute('style', 'margin: .25rem 1.5rem');
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(0.25);
    expect(right).toBe(1.5);
    expect(bottom).toBe(0.25);
    expect(left).toBe(1.5);
  });
});
