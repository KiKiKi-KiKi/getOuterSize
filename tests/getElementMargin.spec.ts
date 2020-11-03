import { getElementMargin } from '../src/lib';

let divElm: null | HTMLElement = null;

beforeEach(() => {
  // setup a DOM element as a render target
  divElm = document.createElement('div');
  document.body.appendChild(divElm);
});

afterEach(() => {
  // cleanup on exiting
  divElm && divElm.remove();
  divElm = null;
});

describe('getElementMargin', () => {
  it('return margins from has margin elment', () => {
    divElm.setAttribute('style', 'margin: 1px 2px 3px 4px');
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(1);
    expect(right).toBe(2);
    expect(bottom).toBe(3);
    expect(left).toBe(4);
  });

  it("return margins 0 from don't have margin elment", () => {
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(0);
    expect(right).toBe(0);
    expect(bottom).toBe(0);
    expect(left).toBe(0);
  });

  it('return margins as float value', () => {
    divElm.setAttribute('style', 'margin: .25rem 1.5rem');
    const { top, right, bottom, left } = getElementMargin(divElm);

    expect(top).toBe(0.25);
    expect(right).toBe(1.5);
    expect(bottom).toBe(0.25);
    expect(left).toBe(1.5);
  });
});
