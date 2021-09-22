import { StatementType } from 'enums';
import * as UserRow from 'models/userRow';

export interface InsertStatement {
  readonly statementType: StatementType.INSERT;
  readonly row: UserRow.Model;
}

export interface SelectStatement {
  readonly statementType: StatementType.SELECT;
}

export interface UnknownStatement {
  readonly statementType: StatementType.UNKNOWN;
}

export interface InvalidStatement {
  readonly statementType: StatementType.INVALID_FORMAT | StatementType.INVALID_NEGATIVE_ID;
}

export type Model = UnknownStatement | SelectStatement | InsertStatement | InvalidStatement;
