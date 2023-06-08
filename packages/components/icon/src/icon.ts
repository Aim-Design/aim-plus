// import.meta.glob批量引入文件
export const svgs = import.meta.glob('./font/*.svg', {
  eager: true,
  as: 'raw'
});

export const IconProps = {
  name: String,
  color: String,
  rotate: Boolean,
  size: [String, Number]
};

export const getIcon = (name?: string) => {
  if (!name) return '';
  return svgs[`./font/${name}.svg`];
};
