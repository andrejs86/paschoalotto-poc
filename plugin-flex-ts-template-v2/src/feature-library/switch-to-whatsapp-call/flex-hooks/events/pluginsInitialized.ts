import { FlexEvent } from '../../../../types/feature-loader';
import { registerSwitchToWACallAction } from '../custom-actions/switchToWACall';

export const eventName = FlexEvent.pluginsInitialized;
export const eventHook = function registerSwitchToWAActions() {
  registerSwitchToWACallAction();
};
