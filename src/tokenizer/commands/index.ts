import { MetaCommandResult } from "enums"

export const prepareStatement = (command: string) => {
  if(command.startsWith(".exit")) {
    return MetaCommandResult.META_COMMAND_SUCCESS_EXIT;
  } else if(command.startsWith(".help")) {
    return MetaCommandResult.META_COMMAND_SUCCESS;
  } else {
    return MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND;
  }
}