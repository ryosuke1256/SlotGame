import type { NextPage } from 'next';
import { useState } from 'react';
import { useMagicalFruit, useInterval } from '~/hooks';
import { ResultHistoryGraph } from '~/components';
import { Button } from '~/components/Elements';
import { getRoundedNumber } from '~/utils/number';
import clsx from 'clsx';
import { slotMachines, SLOT_MODELS_TO_SHOW_NAME, SLOT_MODELS_NAME } from '~/models/slotMachines';
import type { SlotModel } from '~/models/slotMachines/slotMachineTypes';

const section = 'mb-6';
const selectBox = 'border p-1 rounded cursor-pointer';

export type ResultHistory = { date: Date; diffMedal: number }[];

const Home: NextPage = () => {
  const [isShowExplain, setIsShowExplain] = useState<boolean>(false);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [isShowDataCounter, setIsShowDataCounter] = useState(true);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [isShowGraph, setIsShowGraph] = useState(true);
  const { action, property } = useMagicalFruit(slotMachines.magicalFruit);

  const { changeModel, changeSettingNumber, betMax, playGame, changePossibleGame, playAutomated, getSatisfiedHand, clearAll } = action;
  const { modelNumber, settingNumber, resultHistory, diffMedal, canGame, superJackpotTimes, jackpotTimes, melonTimes } = property;

  useInterval(
    () => {
      playAutomated();
    },
    isAuto ? 500 : null
  );

  return (
    <div className='w-10/12 max-w-4xl m-auto'>
      <h1 className='text-center text-5xl my-10'>SLOT GAME 🎰</h1>
      <div className={section}>
        <select className={clsx(selectBox, 'mr-3 w-60')} onChange={(event) => changeModel(event.target.selectedIndex)}>
          {Object.keys(slotMachines).map((slotModel: string, index: number) => {
            return (
              <option key={index} value={slotMachines[slotModel as SlotModel].nameToShow}>
                {slotMachines[slotModel as SlotModel].nameToShow}
              </option>
            );
          })}
        </select>
        <select
          className={selectBox}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            changeSettingNumber(event.target.selectedIndex);
            clearAll();
            setIsAuto(false);
          }}
        >
          {slotMachines.magicalFruit.settings?.map((setting, index: number) => {
            return (
              <option key={index} value={setting.name}>
                {setting.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={clsx('flex justify-between', section)}>
        <Button
          variant={isShowExplain ? 'attention' : 'primary'}
          onClick={() => {
            setIsShowExplain((prevIsShowExplain) => !prevIsShowExplain);
          }}
        >
          Explain
        </Button>
        <Button
          variant={isAuto ? 'attention' : 'primary'}
          onClick={() => {
            changePossibleGame();
            setIsAuto((prevIsAuto) => !prevIsAuto);
          }}
        >
          Auto Play
        </Button>
        <Button
          variant={isShowDetail ? 'attention' : 'primary'}
          onClick={() => {
            setIsShowDetail((prevIsShowDetailDisplay) => !prevIsShowDetailDisplay);
          }}
        >
          Detail
        </Button>
        <Button
          variant={isShowDataCounter ? 'attention' : 'primary'}
          onClick={() => {
            setIsShowDataCounter((prevIsShowDataCounter) => !prevIsShowDataCounter);
          }}
        >
          Data Counter
        </Button>
        <Button
          variant={isShowGraph ? 'attention' : 'primary'}
          onClick={() => {
            setIsShowGraph((prevIsShowGraph) => !prevIsShowGraph);
          }}
        >
          Graph
        </Button>
      </div>
      {isShowExplain && (
        <section className={clsx(section, 'flex flex-col gap-2')}>
          <h2 className='text-lg font-semibold'>【{SLOT_MODELS_TO_SHOW_NAME[modelNumber]}】</h2>
          <p>■ {slotMachines[SLOT_MODELS_NAME[modelNumber]].settings[settingNumber].name}</p>
          <p>機械割：{slotMachines[SLOT_MODELS_NAME[modelNumber]].settings[settingNumber].spec}%</p>
          <p>{slotMachines[SLOT_MODELS_NAME[modelNumber]].settings[settingNumber].description}</p>
          <p>■ 役/払い出し枚数/確率</p>
          {slotMachines[SLOT_MODELS_NAME[modelNumber]].actions.map((action, index: number) => {
            if (action.flag === 'REPLAY' || action.flag === 'MISS') return;
            return (
              <p key={index}>
                {action.flag} / {action.payout}枚 / 1 / {action.probability[settingNumber]}
              </p>
            );
          })}
        </section>
      )}
      {isShowDetail && (
        <section className={clsx(section, 'flex flex-col gap-2')}>
          <p>機械割:{getRoundedNumber(2, ((diffMedal + resultHistory.length * 3) / (resultHistory.length * 3)) * 100)}%</p>
          <p>総差枚数:{diffMedal}枚</p>
          <p>メロン確率: 1/{getRoundedNumber(2, resultHistory.length / melonTimes)}</p>
          <p>
            コイン持ち:{' '}
            {getRoundedNumber(
              2,
              resultHistory.length / (-(diffMedal - (superJackpotTimes * slotMachines.magicalFruit.actions[0].payout + jackpotTimes * slotMachines.magicalFruit.actions[1].payout)) / 50)
            )}
            G
          </p>
        </section>
      )}
      {/* TODO:3000枚以上でレインポーカラーやる？*/}
      {isShowDataCounter && (
        <section className={clsx('flex bg-black text-rose-600 p-10 rounded-2xl', section)}>
          <div className='flex flex-col grow-0'>
            <p className='text-lg'>総回転数:{resultHistory.length}回転</p>
          </div>
          <div className='flex flex-col grow items-center'>
            <p className='text-8xl'>{superJackpotTimes + jackpotTimes}</p>
          </div>
          <div className='flex flex-col'>
            <p>SUPER JACKPOT:{superJackpotTimes}</p>
            <p>JACKPOT: {jackpotTimes}</p>
            <p>SUPER JACKPOT 確率1/{getRoundedNumber(2, resultHistory.length / superJackpotTimes)}</p>
            <p>JACKPOT 確率1/{getRoundedNumber(2, resultHistory.length / jackpotTimes)}</p>
            <p>合算確率1/{getRoundedNumber(2, resultHistory.length / (superJackpotTimes + jackpotTimes))}</p>
          </div>
        </section>
      )}
      <div className={section}>
        <p className='mb-2 text-lg'>
          成立役：<strong>{getSatisfiedHand() ? getSatisfiedHand() : 'なし'}</strong>
        </p>
        <Button
          className={clsx('mt-2 shadow', !canGame ? 'bg-gray-500' : 'bg-opacity-30')}
          onClick={() => {
            if (isAuto) window.alert('オートプレイ中です');
            if (canGame || isAuto) return;
            betMax();
          }}
        >
          MAXBET
        </Button>
        <Button
          className={clsx('ml-10 shadow', canGame ? 'bg-gray-500' : 'bg-opacity-30')}
          onClick={() => {
            if (isAuto) window.alert('オートプレイ中です');
            if (!canGame || isAuto) return;
            playGame();
          }}
        >
          GAME
        </Button>
      </div>
      <div className='pl-10'>{isShowGraph && <ResultHistoryGraph resultHistory={resultHistory} />}</div>
    </div>
  );
};

export default Home;
