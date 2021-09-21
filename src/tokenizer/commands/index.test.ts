import { StatementType } from 'enums';
import { prepareStatement } from './index';

describe(prepareStatement.name, () => {
  describe.each(['select', 'Select', 'SELECT'])('when command is %s', (command) => {
    it('should return select type statement', () => {
      expect(prepareStatement(command)).toEqual({
        statementType: StatementType.SELECT,
      });
    });
  });

  describe.each(['insert', 'Insert', 'INSERT'])('when command is %s', (command) => {
    it('should return insert type statement', () => {
      expect(prepareStatement(command)).toEqual({
        statementType: StatementType.INSERT,
        row: {
          id: 1,
          username: 'hoge',
          email: 'hoge@gmail.com',
        },
      });
    });
  });

  describe('when command is unknown', () => {
    it('should return unkown type statement', () => {
      expect(prepareStatement('hogehoge')).toEqual({
        statementType: StatementType.UNKNOWN,
      });
    });
  });
});
