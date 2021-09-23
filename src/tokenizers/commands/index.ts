import { StatementType } from 'enums';
import { Statement } from 'models';

export const prepareInsert = (
  command: string,
): Statement.InsertStatement | Statement.InvalidStatement => {
  const result = command.match(
    /insert (?<model>.+?) (?<id>-?\d+?) (?<username>.+?) (?<email>.*)$/i,
  );
  if (!result?.groups) {
    return {
      statementType: StatementType.INVALID_FORMAT,
    };
  }

  const id = Number(result.groups.id);
  if (id < 1) {
    return {
      statementType: StatementType.INVALID_NEGATIVE_ID,
    };
  }
  return {
    statementType: StatementType.INSERT,
    row: {
      id,
      username: result.groups.username,
      email: result.groups.email,
    },
  };
};

export const prepareStatement: (command: string) => Statement.Model = (command: string) => {
  if (command.toLowerCase().startsWith('select')) {
    return { statementType: StatementType.SELECT };
  }
  if (command.toLowerCase().startsWith('insert')) {
    return prepareInsert(command);
  }

  return { statementType: StatementType.UNKNOWN };
};
