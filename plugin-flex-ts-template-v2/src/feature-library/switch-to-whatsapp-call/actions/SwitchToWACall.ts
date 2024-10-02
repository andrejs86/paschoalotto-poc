import { Notifications, TaskHelper } from '@twilio/flex-ui';
import { SwitchToWAVoiceNotification } from '../flex-hooks/notifications';
import * as settings from '../config';

import axios from 'axios';
import QueryString from 'qs';

export const switchToWAVoice = async (payload: any) => {

  if (!TaskHelper.isCBMTask(payload.task)) {
    return Notifications.showNotification(SwitchToWAVoiceNotification.SwitchError);
  }

  try { 
    console.log('Switch to WA Call Action was invoked.');

    let data = QueryString.stringify({
      'To': payload.task.attributes.from,
      'From': settings.getFromNumber(),
      'ContentSid': settings.getContentTemplateSid(),
      'ContentVariables': `{"1": "${payload.task.attributes.name.split(' ')[0]}"}` 
    });

    let authorization = window.btoa(`${settings.getAccountSid()}:${settings.getAuthToken()}`);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api.twilio.com/2010-04-01/Accounts/${settings.getAccountSid()}/Messages.json`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Authorization': `Basic ${authorization}`
      },
      data : data
    };

    const _response = await axios.request(config);
    return Notifications.showNotification(SwitchToWAVoiceNotification.SwitchSuccess);
  } catch (error) {
    let message = (error as any)?.message;
    console.error(message);    
    return Notifications.showNotification(SwitchToWAVoiceNotification.SwitchError);
  }
};
