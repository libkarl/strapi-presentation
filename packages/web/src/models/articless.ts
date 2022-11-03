import { ImageInterface } from "models/image";

export interface Articles {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Article;
}

export interface Article {
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
