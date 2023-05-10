function i(n) {
  const t = `aim-${n}`;
  return {
    n: (r) => r ? r.startsWith("--") ? `${t}${r}` : `${t}__${r}` : t,
    classes: (...r) => r.map((e) => {
      if (Array.isArray(e)) {
        const [a, c, s = null] = e;
        return a ? c : s;
      }
      return e;
    })
  };
}
export {
  i as createNamespace
};
