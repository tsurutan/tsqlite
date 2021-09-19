import { MetaCommandResult } from 'enums';

export const prepareStatement = (command: string) => {
  if (command.startsWith('.exit')) {
    return MetaCommandResult.META_COMMAND_SUCCESS_EXIT;
  }
  if (command.startsWith('.help')) {
    return MetaCommandResult.META_COMMAND_SUCCESS;
  }
  return MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND;
};
