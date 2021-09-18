import { MetaCommandResult } from "enums";
import { demultiplexMetaCommand } from "metaCommands";
import {createInterface} from "readline"

export const repl = () => {
  const cli = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })
  cli.setPrompt("db> ");
  cli.prompt();

  cli.on('line', (line) => {
    if(line.startsWith(".")) {
      switch(demultiplexMetaCommand(line)) {
        case MetaCommandResult.META_COMMAND_SUCCESS:
          break;
        case MetaCommandResult.META_COMMAND_SUCCESS_EXIT:
          cli.close()
          break;
        case MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND:
          break;
        default:
          break;
      }
    }

    // meta_command
    if(line.startsWith("select")) {
      console.log("Select command.")
    } else if(line.startsWith("insert")) {
      console.log("Insert command.")
    } else {
      console.log("Unknown command.")
    }

    cli.prompt();
  }).on('close', function() {
      console.log('Have a great day!');
      process.exit(0);
  });
}