import { MetaCommandResult } from 'enums';

export const demultiplexMetaCommand = (metaCommand: string) => {
  if (metaCommand.startsWith('.exit')) {
    return MetaCommandResult.META_COMMAND_SUCCESS_EXIT;
  }
  if (metaCommand.startsWith('.help')) {
    return MetaCommandResult.META_COMMAND_SUCCESS;
  }
  return MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND;
};
