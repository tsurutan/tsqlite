import { StatementType } from 'enums';
import * as UserRow from 'models/userRow';

interface InsertStatement {
  readonly statementType: StatementType.INSERT;
  readonly row: UserRow.Model;
}

interface SelectStatement {
  readonly statementType: StatementType.SELECT;
}

interface UnknownStatement {
  readonly statementType: StatementType.UNKNOWN;
}

export type Model = UnknownStatement | SelectStatement | InsertStatement;
