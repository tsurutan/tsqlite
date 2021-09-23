import { ExecuteResult, StatementType } from 'enums';
import { Statement } from 'models';

const executeInsert = (statement: Statement.InsertStatement): ExecuteResult => {
  if (statement.row.id === 3) {
    return ExecuteResult.EXECUTE_DUPLICATE_KEY;
  }
  return ExecuteResult.EXECUTE_SUCCESS;
};

export const executeStatement = (statement: Statement.Model): ExecuteResult => {
  switch (statement.statementType) {
    case StatementType.INSERT:
      return executeInsert(statement);
    default:
      return ExecuteResult.EXECUTE_SUCCESS;
  }
};
