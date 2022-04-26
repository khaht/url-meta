import { HTMLElement } from 'node-html-parser';
import { getHTMLElement } from './lib/request';
import { readMetaValue } from './lib/extract-meta';

export const parser = async (url: string, options?: ParserRequestOptions): Promise<ParserResponse> => {
  if (!/(^http(s?):\/\/[^\s$.?#].[^\s]*)/i.test(url)) throw new Error('url is not valid');
  const opts: ParserRequestOptions = {
    maxRedirects: 10,
    timeout: 10000,
    userAgent: 'Metadata',
    fromEmail: 'metadata@example.com',
  };
  Object.assign(opts, options);
  const $: HTMLElement = await getHTMLElement(url, opts);
  const metas: HTMLElement[] = $.querySelectorAll('meta');
  return readMetaValue(metas as any);
};
