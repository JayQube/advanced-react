import { User } from 'entities/User';

export enum ArticleSortField {
  // По колитству просмотров
  VIEWS = 'views', // eslint-disable-line no-unused-vars
  // По названию
  TITLE = 'title', // eslint-disable-line no-unused-vars
  // По дате создания
  CREATED = 'createdAt', // eslint-disable-line no-unused-vars
}

export enum ArticleBlockType {
  CODE = 'CODE', // eslint-disable-line no-unused-vars
  IMAGE = 'IMAGE', // eslint-disable-line no-unused-vars
  TEXT = 'TEXT', // eslint-disable-line no-unused-vars
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL', // eslint-disable-line no-unused-vars
  IT = 'IT', // eslint-disable-line no-unused-vars
  SCIENCE = 'SCIENCE', // eslint-disable-line no-unused-vars
  ECONOMICS = 'ECONOMICS' // eslint-disable-line no-unused-vars
}

export enum ArticleView {
  BIG = 'BIG', // eslint-disable-line no-unused-vars
  SMALL = 'SMALL', // eslint-disable-line no-unused-vars
}

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
