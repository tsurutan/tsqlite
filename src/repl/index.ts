import { MetaCommandResult, StatementType } from 'enums';
import { demultiplexMetaCommand } from 'metaCommands';
import { createInterface } from 'readline';
import { prepareStatement } from 'tokenizer/commands';

export const repl = () => {
  const cli = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  cli.setPrompt('db> ');
  cli.prompt();

  cli
    .on('line', (line) => {
      if (line.startsWith('.')) {
        switch (demultiplexMetaCommand(line)) {
          case MetaCommandResult.META_COMMAND_SUCCESS:
            break;
          case MetaCommandResult.META_COMMAND_SUCCESS_EXIT:
            cli.close();
            break;
          case MetaCommandResult.META_COMMAND_UNRECOGNIZED_COMMAND:
            break;
          default:
            break;
        }
      } else {
        const statement = prepareStatement(line);
        switch (statement.statementType) {
          case StatementType.UNKNOWN:
            console.log('UNKNOWN');
            break;
          default:
            break;
        }
      }

      cli.prompt();
    })
    .on('close', () => {
      console.log('Exit');
      process.exit(0);
    });
};
