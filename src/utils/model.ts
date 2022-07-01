import { isBetweenNumber } from '~/utils/number';
import { SlotMachine, SlotMachineAction } from '~/models/slotMachines';

export const getAction = <T extends number>(slotMachine: SlotMachine, randomNumberResult: number, settingNumber: T): SlotMachineAction => {
  const action = slotMachine.actions.find((action: SlotMachineAction) => {
    if (isBetweenNumber(randomNumberResult, action.range[settingNumber][0], action.range[settingNumber][1])) return action.flag;
  });
  if (!action) throw new Error(`"${randomNumberResult}" could not get the action`);
  return action;
};
