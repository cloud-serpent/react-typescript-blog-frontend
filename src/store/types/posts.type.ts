import { Post } from 'types';

/* eslint-disable @typescript-eslint/ban-types */

export type IGetMyPostRequestPayload = {
  page: number;
  list: number;
};

export type IGetMyPostSuccessPayload = {
  posts: Post[];
  total: number;
};

export type ICreateNewPostRequestPayload = {
  title: string;
  body: string;
  attachments?: string;
  callback: any;
};

export type ICreateNewPostSuccessPayload = {
  posts: Post;
};

export type ICreateNewPostFailurePayload = {
  error: any;
};

export type IUpdatePostPayload = {
  id: number;
  title: string;
  body: string;
  attachments: string;
  callback: any;
};

export type IDeletePostPayload = {
  id: number;
  callback: any;
};
