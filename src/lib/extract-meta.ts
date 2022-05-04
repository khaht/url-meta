export const readMetaValue = (metas: HTMLElement[]): ParserResponse => {
  const result: ParserResponse = { meta: {} };
  const metaData: ParserResponse = {};
  metas.forEach((el: HTMLElement) => {
    const prop = el.getAttribute('name') || el.getAttribute('property');
    if (prop && el.getAttribute('content')) {
      Object.assign(metaData, { [prop]: el.getAttribute('content') });
    }
  });
  Object.keys(metaData).forEach((key: string) => {
    const k: string[] = key.split(':');
    if (k.length < 2) {
      Object.assign(result.meta, { [key]: metaData[key] });
    } else {
      if (!result[k[0]]) {
        result[k[0]] = {};
      }
      const item: { [key: string]: any } =
        k.length > 2 ? { [`${k[1]}:${k[2]}`]: metaData[key] } : { [k[1]]: metaData[key] };
      Object.assign(result[k[0]], item);
    }
  });
  return result;
};
