// 首先通过 typeof 操作符获取 Icons 变量的类型，然后通过 keyof 操作符获取该类型的所有键。
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}
