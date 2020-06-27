import logOnce from 'index';

describe('logOnce', () => {
  it('should log only once', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect.assertions();
    for (let i = 0; i < 3; ++i) {
      logOnce(`i:${i}`);
    }
    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toHaveBeenLastCalledWith('i:0');
  });
});
