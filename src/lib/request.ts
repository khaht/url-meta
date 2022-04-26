import { HTMLElement, parse } from 'node-html-parser';
import q from 'q';
import request from 'request';

export const getHTMLElement = (url: string, options: ParserRequestOptions = {}): Promise<HTMLElement> => {
  const dfd = q.defer();
  const requestOpts: request.Options = {
    url,
    headers: {
      'User-Agent': options.userAgent,
      From: options.fromEmail,
    },
    maxRedirects: options.maxRedirects,
    encoding: 'utf8',
    timeout: options.timeout,
  };
  request.get(requestOpts, function (err, response, body) {
    if (err || !response) {
      return dfd.reject(err);
    }
    if (response.statusCode && response.statusCode !== 200) {
      return dfd.reject({
        Error: 'Cannot fetch this page ',
      });
    }
    if (response.statusCode && response.statusCode === 200) {
      return dfd.resolve(parse(body, { lowerCaseTagName: true }));
    }
  });
  return dfd.promise as any;
};
