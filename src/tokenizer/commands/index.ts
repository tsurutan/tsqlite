import { StatementType } from 'enums';
import { Statement } from 'models';

export const prepareStatement: (command: string) => Statement.Model = (command: string) => {
  if (command.toLowerCase().startsWith('select')) {
    return { statementType: StatementType.SELECT };
  }
  if (command.toLowerCase().startsWith('insert')) {
    // TODO: normalize the following object
    return {
      statementType: StatementType.INSERT,
      row: {
        id: 1,
        username: 'hoge',
        email: 'hoge@gmail.com',
      },
    };
  }

  return { statementType: StatementType.UNKNOWN };
};
