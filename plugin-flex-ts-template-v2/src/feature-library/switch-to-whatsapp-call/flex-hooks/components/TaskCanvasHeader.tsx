import * as Flex from '@twilio/flex-ui';

import SwitchButton from '../../custom-components/SwitchButton';
import { FlexComponent } from '../../../../types/feature-loader';

export const componentName = FlexComponent.TaskCanvasHeader;
export const componentHook = function addSwitchToWACallButton(flex: typeof Flex) {
  flex.TaskCanvasHeader.Content.add(<SwitchButton key="switch-wa-call-button" />, {
    sortOrder: 1,
    if: (props) => Flex.TaskHelper.isCBMTask(props.task) && props.task.taskStatus === 'assigned',
  });
};
