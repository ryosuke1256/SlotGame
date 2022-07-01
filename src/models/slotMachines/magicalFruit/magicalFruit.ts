import { SLOT_MODELS_TO_SHOW_NAME } from '../slotMachineConstants';
import { MAGICAL_FRUIT_SETTINGS } from './magicalFruitConstants';
import { MagicalFruit } from './magicalFruitTypes';

// TODO:MY

/**
 * 簡易版
 * 乱数の範囲 0~65535：実際のスロットの抽選を行うメイン基盤ではアセンブリ言語が使用されメモリのビット列の関係で乱数の範囲は65536となっており、JSで記述する際は65536である必要はないしこのようなプログラムで記述しなければいけないものではないが実際のスロットのプログラムのように書きたいという意図があるため今回は乱数の範囲を65536としてプログラムを作成する
 * nameToShow:表示用の機種名
 * settings:設定
 * actions
 * flag:成立役
 * range:乱数の範囲、[[設定１の乱数の範囲]、[設定２の乱数の範囲]、[設定３の乱数の範囲]、[設定４の乱数の範囲]、[設定５の乱数の範囲]、[設定６の乱数の範囲]]
 * probability:[設定１の確率、設定２の確率、設定３の確率、設定４の確率、設定５の確率、設定６の確率]
 * payout: 払い出し枚数
 */
export const magicalFruit: MagicalFruit = {
  nameToShow: SLOT_MODELS_TO_SHOW_NAME[0],
  settings: MAGICAL_FRUIT_SETTINGS,
  actions: [
    {
      flag: 'SUPER_JACKPOT',
      range: [
        [0, 233],
        [0, 251],
        [0, 261],
        [0, 85],
        [0, 467],
        [0, 409],
      ],
      probability: [280, 260, 250, 760, 140, 160],
      payout: 350,
    },
    {
      flag: 'JACKPOT',
      range: [
        [234, 371],
        [252, 413],
        [262, 473],
        [86, 1199],
        [468, 599],
        [410, 999],
      ],
      probability: [440, 300, 250, 70, 840, 160],
      payout: 100,
    },
    {
      flag: 'REPLAY',
      range: [
        [372, 9340],
        [414, 9382],
        [474, 9442],
        [1200, 10168],
        [600, 3999],
        [1000, 9969],
      ],
      probability: [7.3, 7.3, 7.3, 7.3, 40, 7.3],
      payout: 3,
    },
    {
      flag: 'MELON',
      range: [
        [9341, 19603],
        [9383, 19796],
        [9443, 19972],
        [10169, 21000],
        [4000, 12999],
        [9970, 23355],
      ],
      probability: [6.4, 6.3, 6.2, 6.1, 10.1, 5.8],
      payout: 6,
    },
    {
      flag: 'APPLE',
      range: [
        [19604, 21304],
        [19797, 21517],
        [19973, 21813],
        [21001, 22700],
        [13000, 16999],
        [23356, 25200],
      ],
      // FIXME
      probability: [38.5, 38.5, 35.6, 35.6, 35.6, 35.6],
      payout: 2,
    },
    {
      flag: 'MISS',
      range: [
        [21305, 65535],
        [21518, 65535],
        [21814, 65535],
        [22701, 65535],
        [17000, 65535],
        [25201, 65535],
      ],
      probability: [1.48, 1.49, 1.5, 1.53, 1.35, 1.62],
      payout: 0,
    },
  ],
};
