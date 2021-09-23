import fs from 'fs/promises';
import { Pager } from 'models';

export const openPager = async (filename: string) => {
  const file = await fs.open(filename, 'w+');
  const pager: Pager.Model = {
    file,
    fileLength: 0,
    numPages: 0,
  };
  return pager;
};
