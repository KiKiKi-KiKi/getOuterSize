import getOuterSize from '../src/index';

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

describe('getOuterSize', () => {
  describe('return width & height including margin', () => {
    it('from has margin element', () => {
      divElm.setAttribute('style', 'width: 100px; height: 100px; margin: 10px 5px 5px 10px');

      const { width, height } = getOuterSize(divElm);

      expect(width).toBe(10 + 5);
      expect(height).toBe(10 + 5);
    });
  });

  it('from no margin element', () => {
    divElm.setAttribute('style', 'width: 100px; height: 100px;');

    const { width, height } = getOuterSize(divElm);

    expect(width).toBe(0);
    expect(height).toBe(0);
  });
});
