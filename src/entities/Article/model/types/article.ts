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
    IT = 'IT', // eslint-disable-line no-unused-vars
    SCIENCE = 'SCIENCE', // eslint-disable-line no-unused-vars
    ECONOMICS = 'ECONOMICS' // eslint-disable-line no-unused-vars
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
