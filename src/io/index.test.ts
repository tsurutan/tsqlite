import fs from 'fs';
import { Pager } from 'models';
import { openPager } from './index';

describe(openPager.name, () => {
  const filename = 'test.db';
  let pager: Pager.Model;
  beforeEach(async () => {
    fs.rmSync(filename, { force: true });
    pager = await openPager(filename);
  });

  it('should create file', () => {
    expect(fs.existsSync(filename)).toBeTruthy();
  });

  it('should return pager', () => {
    expect(pager).toBeTruthy();
  });
});
