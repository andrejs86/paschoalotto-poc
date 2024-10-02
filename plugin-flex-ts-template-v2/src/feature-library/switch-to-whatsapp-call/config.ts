import { getFeatureFlags } from '../../utils/configuration';
import SwitchToWhatsappCallConfig from './types/ServiceConfiguration';

const { enabled = false, contentTemplateSid = '', accountSid = '', authToken = '', fromNumber = '' } = (getFeatureFlags()?.features?.switch_to_whatsapp_call as SwitchToWhatsappCallConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const getContentTemplateSid = () => {
  return contentTemplateSid;
}

export const getAccountSid = () => {
  return accountSid;
}

export const getAuthToken = () => {
  return authToken;
}

export const getFromNumber = () => {
  return fromNumber;
}
