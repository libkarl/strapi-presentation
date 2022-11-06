import { ImageInterface } from "models/image";

export interface Articles {
  data: Article[];
}

export interface Article {
  id: number;
  attributes: ArticleProps;
}

export interface ArticleProps {
  author: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  category: string;
  articleintro: string;
  title: string;
  paragraph1: string;
  subtitle: string;
  paragraph2: string;
  paragraph3: string;
  articlename: string;
  foto: Foto;
  bigpicture: Bigpicture;
  smallpicture: Smallpicture;
  localizations: Localizations;
}

interface Foto extends ImageInterface {}
interface Bigpicture extends ImageInterface {}
interface Smallpicture extends ImageInterface {}

export interface Localizations {
  data: any[];
}
