import { Actions } from '@twilio/flex-ui';
import { switchToWAVoice } from '../../actions/SwitchToWACall';

export const registerSwitchToWACallAction = () => {
  Actions.registerAction('SwitchToWACall', async (payload: any) => switchToWAVoice(payload));
};
