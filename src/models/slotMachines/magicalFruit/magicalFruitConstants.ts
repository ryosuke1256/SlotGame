export const MAGICAL_FRUIT_FLAGS = ['SUPER_JACKPOT', 'JACKPOT', 'REPLAY', 'MELON', 'APPLE', 'MISS'] as const;

/**
 * spec:機械割
 */
export const MAGICAL_FRUIT_SETTINGS = [
  {
    name: '設定１',
    spec: 95.9,
    description: '一番出率の低い、理論値では回せば回すほど負ける設定',
  },
  {
    name: '設定４',
    spec: 103.2,
    description: '機械割１００％を少し超える設定、確率がなかなか収束しないのを見るのが楽しいかもしれない？',
  },
  {
    name: '設定６',
    spec: 107.8,
    description: '通常の設定の中では一番出率が高い、バランスの取れた設定',
  },
  {
    name: 'C',
    spec: 111.3,
    description: 'JACK POTが全設定で一番引きやすい、安定して出る設定',
  },
  {
    name: 'BOMB',
    spec: 111.5,
    description: 'SUPER JACKPOTが全設定で一番引きやすいがコイン持ちが悪いため荒い挙動をする設定',
  },
  {
    name: 'EXTRA',
    spec: 143.8,
    description: '全設定で一番出率の高い設定、SUPER JACKPOTとJACKPOTともに引きやすいエキストラ設定',
  },
] as const;
