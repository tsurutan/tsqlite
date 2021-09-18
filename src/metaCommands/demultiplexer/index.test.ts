import { MetaCommandResult } from "enums";
import { demultiplexMetaCommand  } from "metaCommands";

describe(demultiplexMetaCommand.name, () => {
  describe("when meta command contains .exit", () => {
    it("should return META_COMMAND_SUCCESS_EXIT", () => {
      expect(demultiplexMetaCommand(".exit")).toBe(MetaCommandResult.META_COMMAND_SUCCESS_EXIT);
    })
  })
})