import type { SlotMachine, SlotMachineAction, SlotMachineFlag, SlotMachineSettings } from '../slotMachineTypes';
import { magicalFruit } from './magicalFruit';
import { MAGICAL_FRUIT_SETTINGS, MAGICAL_FRUIT_FLAGS } from './magicalFruitConstants';

export type { MagicalFruit, MagicalFruitFlag, MagicalFruitAction, MagicalFruitSettings, MagicalFruitSetting, MagicalFruitSettingNumber };

type MagicalFruit = {
  settings: MagicalFruitSettings;
  actions: { flag: MagicalFruitFlag }[];
} & SlotMachine;

type MagicalFruitFlag = typeof MAGICAL_FRUIT_FLAGS[number] & SlotMachineFlag;
type MagicalFruitAction = typeof magicalFruit.actions[number] & SlotMachineAction;

type MagicalFruitSettings = typeof MAGICAL_FRUIT_SETTINGS & SlotMachineSettings;
type MagicalFruitSetting = typeof MAGICAL_FRUIT_SETTINGS[number] & SlotMachineSettings;
type MagicalFruitSettingNumber = 1 | 2 | 3 | 4 | 5 | 6;
