import { StatementType } from 'enums';
import { prepareInsert, prepareStatement } from './index';

describe(prepareStatement.name, () => {
  describe.each(['select', 'Select', 'SELECT'])('when command is %s', (command) => {
    it('should return select type statement', () => {
      expect(prepareStatement(command)).toEqual({
        statementType: StatementType.SELECT,
      });
    });
  });

  describe.each(['insert', 'Insert', 'INSERT'])('when command is %s', (command) => {
    describe('when insert value is correct', () => {
      it('should return insert type statement', () => {
        expect(prepareStatement(`${command} user 1 hoge hoge@gmail.com`)).toEqual({
          statementType: StatementType.INSERT,
          row: {
            id: 1,
            username: 'hoge',
            email: 'hoge@gmail.com',
          },
        });
      });
    });

    describe('when insert value is invalid format', () => {
      it('should return invalid format type', () => {
        expect(prepareStatement(`${command} user hu`)).toEqual({
          statementType: StatementType.INVALID_FORMAT,
        });
      });
    });

    describe('when insert id is invalid format', () => {
      it('should return invalid id type when id is negative', () => {
        expect(prepareStatement(`${command} user -1 hoge hoge@gmail.com`)).toEqual({
          statementType: StatementType.INVALID_NEGATIVE_ID,
        });
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
