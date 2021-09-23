import { ExecuteResult, StatementType } from 'enums';
import { Statement, UserRow } from 'models';
import { executeStatement } from './index';

const generateStatement =
  <T extends StatementType>(statementType: T) =>
    (row: T extends StatementType.INSERT ? UserRow.Model : undefined) => ({
      statementType,
      row,
    });

describe(executeStatement.name, () => {
  describe('when statement is insert', () => {
    const generateInsertStatement = generateStatement(StatementType.INSERT);
    describe('when row is correct', () => {
      const statement: Statement.InsertStatement = generateInsertStatement({
        id: 1,
        username: 'hoge',
        email: 'hoge@gmail.com',
      });
      it('should return EXECUTE_SUCCESS', () => {
        expect(executeStatement(statement)).toBe(ExecuteResult.EXECUTE_SUCCESS);
      });
    });

    describe('when row is invalid', () => {
      it('should return EXECUTE_DUPLICATE_KEY when id is duplicated', () => {
        const statement: Statement.InsertStatement = generateInsertStatement({
          id: 3,
          username: 'hoge',
          email: 'hoge@gmail.com',
        });
        expect(executeStatement(statement)).toBe(ExecuteResult.EXECUTE_DUPLICATE_KEY);
      });
    });
  });

  describe('when statement is select', () => {
    const statement: Statement.SelectStatement = {
      statementType: StatementType.SELECT,
    };
    it('should return EXECUTE_SUCCESS', () => {
      expect(executeStatement(statement)).toBe(ExecuteResult.EXECUTE_SUCCESS);
    });
  });
});
