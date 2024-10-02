import React, { useState } from 'react';
import { Actions, ITask, StateHelper, Button } from '@twilio/flex-ui';
import { CallTransferIcon } from "@twilio-paste/icons/esm/CallTransferIcon";
import { ConversationsHelper } from '../../../../utils/helpers';

interface TransferButtonProps {
  task: ITask;
}

const SwitchButton = (props: TransferButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const allowSwitch = () => {
    const conversationState = StateHelper.getConversationStateForTask(props.task);
    
    if (
      conversationState &&
      (conversationState.participants.size > 2 ||
        ConversationsHelper.countOfOutstandingInvitesForConversation(conversationState)) &&
        props.task.channelType !== "whatsapp"
    ) {
      return false;
    }
    return true;
  };

  const switchToWAVoice = async () => {
    setIsLoading(true);
    await Actions.invokeAction('SwitchToWACall', { task: props.task });
    setIsLoading(false);
  };

  return (
    <Button
        key="switch-to-wa-call-button"
        disabled={isLoading || !allowSwitch()}
        onClick={switchToWAVoice}
        variant="secondary"
        title="Whatsapp Call"
        style={{marginRight: '10px'}}
      ><CallTransferIcon decorative={false} title="Voz via Whatsapp" />&nbsp;WA Voz</Button>
  );
};

export default SwitchButton;
