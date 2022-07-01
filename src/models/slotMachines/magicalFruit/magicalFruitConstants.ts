export const MAGICAL_FRUIT_FLAGS = ['SUPER_JACKPOT', 'JACKPOT', 'REPLAY', 'MELON', 'APPLE', 'MISS'] as const;

/**
 * spec:機械割
 */
export const MAGICAL_FRUIT_SETTINGS = [
  {
    name: '設定１',
    spec: 95.9,
    description: '一番出率が低い、理論値では回せば回すほど負ける設定',
  },
  {
    name: '設定４',
    spec: 103.2,
    description: '機械割１００％を少し超える設定、確率がなかなか収束しないのを見るのが楽しいかもしれない？',
  },
  {
    name: '設定６',
    spec: 107.8,
    description: '通常の設定の中では一番出率が高い',
  },
  {
    name: 'C',
    spec: 111.3,
    description: '「JACK POT」が全設定で一番引きやすい、安定して出やすい設定',
  },
  {
    name: 'BOMB',
    spec: 111.5,
    description: '「SUPER JACKPOT」が全設定で一番引きやすいがコイン持ちが悪いため、荒い挙動になりやすい設定',
  },
  {
    name: 'EXTRA',
    spec: 143.8,
    description: '全設定で一番出率が高い設定、「SUPER JACKPOT」と「JACKPOT」が両方引きやすいエキストラ設定',
  },
] as const;
