# url-meta-scraper
Get meta data from any url (http/https) and support group by property

## Usage
### Install
- With npm
```script
  npm install url-meta-scraper --save
```
- With yarn
```script
  yarn add url-meta-scraper --save
```
### Example
- Basic
```js
  import { parser } from 'url-meta-scraper';
  const metaData = await parser(url)
```
- If you'd like to override the default options:
```js
  import { parser } from 'url-meta-scraper';
  const opts = {
    maxRedirects: 10,
    timeout: 10000,
    userAgent: 'your-agent',
    fromEmail: 'your-mail@example.com',
  }
  const metaData = await parser(url, opts)
```
### Paramaters
```js
  // The url to get meta data
  url: 'string',
```
### Options
Package's default options are the values below, you can override it:
```js
{
  // The package will follow a maximum of 10 redirects
  maxRedirects: 10,
  // Timeout of a request, default is 10 seconds:
  timeout: 10000,
  // The user agent and email that will make url request:
  userAgent: 'Metadata',
  fromEmail: 'metadata@example.com',
}
```
### Returns
Returns a promise that gets resolved with the following url metadata and group by properties tag if the url request response returns successfully.
```js
  {
    // This is includes meta data of the meta without property
    meta: {
      title: 'title',
      description: 'description',
      ...
    },
    // This is includes meta data of the meta with property
    og: {
      title: 'title',
      description: 'description',
      ...
    },
    ...
  }
```