interface ParserRequestOptions {
  userAgent?: string;
  fromEmail?: string;
  maxRedirects?: number;
  timeout?: number;
}

interface Meta {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

interface ParserResponse {
  [key: string]: Meta;
}
