import { MetaCommandResult } from 'enums';
import { demultiplexMetaCommand } from 'tokenizers/metaCommands';

describe(demultiplexMetaCommand.name, () => {
  describe('when meta command contains .exit', () => {
    it('should return META_COMMAND_SUCCESS_EXIT', () => {
      expect(demultiplexMetaCommand('.exit')).toBe(MetaCommandResult.META_COMMAND_SUCCESS_EXIT);
    });
  });

  describe('when meta command contains .help', () => {
    it('should return META_COMMAND_SUCCESS_EXIT', () => {
      expect(demultiplexMetaCommand('.help')).toBe(MetaCommandResult.META_COMMAND_SUCCESS);
    });
  });

  describe('when meta command contains .unknown', () => {
    it('should return META_COMMAND_SUCCESS_EXIT', () => {
      expect(demultiplexMetaCommand('.unknown')).toBe(
        MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND,
      );
    });
  });
});
