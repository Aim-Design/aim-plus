import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/aim-plus`);
};

//打包组件 执行components下面的 package.json 的 build命令
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/**/styles/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/aim-plus/lib/components`))
    .pipe(dest(`${pkgPath}/aim-plus/esm/components`));
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
