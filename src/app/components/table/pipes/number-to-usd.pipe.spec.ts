import { NumberToUsdPipe } from './number-to-usd.pipe';

describe('NumberToUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
