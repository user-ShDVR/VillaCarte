export interface IApiRequest_Get {
  url: string;
  headerList?: {};
}

export interface IApiRequest_Post {
  url: string;
  postData?: {};
  headerList?: {};
}

export interface IApiResponse_Core<T> {
  meta: {}
  data: T;
}