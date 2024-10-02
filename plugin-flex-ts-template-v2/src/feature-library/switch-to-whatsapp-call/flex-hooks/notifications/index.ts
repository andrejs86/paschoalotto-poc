import * as Flex from '@twilio/flex-ui';

// Export the notification IDs an enum for better maintainability when accessing them elsewhere
export enum SwitchToWAVoiceNotification {
  SwitchSuccess = 'PSSwitchSuccess',
  SwitchError = 'PSSwitchError',
}

// Return an array of Flex.Notification
export const notificationHook = (flex: typeof Flex) => [
  {
    id: SwitchToWAVoiceNotification.SwitchSuccess,
    type: flex.NotificationType.success,
    content: "Convite para chamada de voz via Whatsapp enviado com sucesso!",
    closeButton: true,
    timeout: 3000,
  },
  {
    id: SwitchToWAVoiceNotification.SwitchError,
    type: flex.NotificationType.error,
    content: "Não foi possível enviar o convite para chamada de voz via Whatsapp.",
    closeButton: true,
    timeout: 5000,
  }
];
