export type Categorietype = {
  backgroundImage?: string;
  backgroundSize?: "cover" | "auto" | "contain";
  backgroundPosition?: "inherit" | "center" | "50px 50px";
  Text?: string;
  link?: string;
};
export type Carttype = {
  backgroundImage: string;
  Text: string;
  Price: number;
  CurrencyType?: string;
};
export type getAllItemstype = {
  sizeItems?: number;
  page?: number;
};
export type Items = {
  attributes: {};
  barcode: string;
  category: { id: number; attributes: [] };
  colors: [{ id: number }];
  description: string;
  descriptionTranslate: { en: string };
  id: string;
  nameAr: string;
  nameTranslate: { en: string };
  sellPrice: number;
  sizes: [];
  policies: [{
    id: string,
    name: { ar: string },
    description: { ar: string },
    url: string,
    guid: string
  }],
  attachments: [
    {
      id: string,
      code: string,
      guid: string
    }
  ]
}
