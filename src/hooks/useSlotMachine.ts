import { useState, useCallback } from 'react';
import { getRandomIntegerLikeSlot } from '~/utils/number';

type ResultHistory = { date: Date; diffMedal: number }[];

export const useSlotMachine = () => {
  const [modelNumber, setModelNumber] = useState<number>(0);
  const [settingNumber, setSettingNumber] = useState<number>(0);
  const [canGame, setCanGame] = useState(false);
  const [resultHistory, setResultHistory] = useState<ResultHistory>([]);
  const [randomNumberResult, setRandomNumberResult] = useState<number | undefined>();
  const [diffMedal, setDiffMedal] = useState<number>(0);

  const changeModel = useCallback((modelNumber: number) => {
    setModelNumber(modelNumber);
  }, []);

  const changeSettingNumber = useCallback((settingNumber: number) => {
    setSettingNumber(settingNumber);
  }, []);

  const betMax = useCallback(() => {
    setDiffMedal((prevDiffMedal) => prevDiffMedal - 3);
    setCanGame(true);
  }, []);

  const playGame = useCallback(() => {
    setRandomNumberResult(getRandomIntegerLikeSlot());
    setCanGame(false);
  }, []);

  const changePossibleGame = useCallback(() => {
    setCanGame(true);
  }, []);

  const playAutomated = useCallback(() => {
    setDiffMedal((prevDiffMedal) => prevDiffMedal - 3);
    setRandomNumberResult(getRandomIntegerLikeSlot());
  }, []);

  const clearSlotMachineData = useCallback(() => {
    setDiffMedal(0);
    setResultHistory([]);
  }, []);

  return {
    changeModel,
    changeSettingNumber,
    betMax,
    playGame,
    changePossibleGame,
    playAutomated,
    clearSlotMachineData,
    setDiffMedal,
    setResultHistory,
    modelNumber,
    settingNumber,
    randomNumberResult,
    resultHistory,
    diffMedal,
    canGame,
  };
};
