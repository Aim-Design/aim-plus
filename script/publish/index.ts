import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';

export const publishComponent = async () => {
  run('release-it', `${pkgPath}/aim-plus`);
};

export default series(async () => publishComponent());
