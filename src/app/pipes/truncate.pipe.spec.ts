import { TruncatePipe } from './truncate.pipe';

describe('Truncate Pipe', () => {
  const truncatePipe = new TruncatePipe();

  const loremTwenty = 'Lorem ipsum dolor si';
  const loremWord = 'Lorem';

  it('Verifica se inicializa', () => {
    expect(truncatePipe).not.toBeNull();
  });

  it('Verifica o retorno empty se texto é null', () => {
    expect(truncatePipe.transform('')).toEqual('');
    expect(truncatePipe.transform(null)).toEqual('');
  });

  it('verifica o retorno original do texto se o limite for zero ou não for passado', () => {
    expect(truncatePipe.transform(loremTwenty)).toEqual(loremTwenty);
    expect(truncatePipe.transform(loremTwenty, 0)).toEqual(loremTwenty);
  });

  it('verifica o retorno original do texto se o limite for igual ao tamanho do texto', () => {
    const length = loremTwenty.length;
    expect(truncatePipe.transform(loremTwenty, length)).toEqual(loremTwenty);
  });

  it('verifica o retorno do texto cortado', () => {
    expect(truncatePipe.transform(loremWord, 4)).toEqual('Lore...');
  });

  it('verifica o retorno do texto cortado sem reticências', () => {
    expect(truncatePipe.transform(loremWord, 4, false)).toEqual('Lore');
  });

  it('verifica o retorno do texto cortado removendo ultima palavra', () => {
    expect(truncatePipe.transform(loremTwenty, 19)).toEqual('Lorem ipsum dolor...');
  });
});
