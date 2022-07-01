import { SLOT_MODELS_NAME, SLOT_MODELS_TO_SHOW_NAME } from './slotMachineConstants';

export type { SlotModel, SlotModelToShowName, SlotMachines, SlotMachineAction, SlotMachine, SlotMachineFlag, SlotMachineNameToShow, SlotMachineSettings };

type SlotModel = typeof SLOT_MODELS_NAME[number];
type SlotModelToShowName = typeof SLOT_MODELS_TO_SHOW_NAME[number];

type SlotMachines = { [key in SlotModel]: SlotMachine };

type SlotMachine = Readonly<{
  nameToShow: string;
  settings: Readonly<[slotMachineSetting, slotMachineSetting, slotMachineSetting, slotMachineSetting, slotMachineSetting, slotMachineSetting]>;
  actions: SlotMachineAction[];
}>;

type SlotMachineAction = {
  flag: string;
  range: Readonly<number[][]>;
  probability: Readonly<[number, number, number, number, number, number]>;
  payout: number;
};

type slotMachineSetting = { name: string; spec: number; description: string };
type SlotMachineSettings = SlotMachine['settings'];
type SlotMachineFlag = SlotMachine['actions'][number]['flag'];
type SlotMachineNameToShow = SlotMachine['nameToShow'];
