import getOuterSize from '../src/index';

let divElm: null | HTMLElement = null;
beforeEach(() => {
  // setup a DOM element as a render target
  divElm = document.createElement('div');
  document.body.appendChild(divElm);
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    } as DOMRect;
  });
});

afterEach(() => {
  // cleanup on exiting
  divElm && divElm.remove();
  divElm = null;
});

describe('getOuterSize', () => {
  describe('return width & height including margin', () => {
    it('from has margin element', () => {
      divElm.setAttribute('style', 'margin: 10px 5px 5px 10px');

      const { width, height } = getOuterSize(divElm);

      expect(width).toBe(100 + 10 + 5);
      expect(height).toBe(100 + 10 + 5);
    });
  });

  it('from no margin element', () => {
    const { width, height } = getOuterSize(divElm);

    expect(width).toBe(100);
    expect(height).toBe(100);
  });

  it('with float value', () => {
    divElm.setAttribute('style', 'margin: 0.25rem;');

    const { width, height } = getOuterSize(divElm);

    expect(width).toBe(100 + 0.25 * 2);
    expect(height).toBe(100 + 0.25 * 2);
  });
});
