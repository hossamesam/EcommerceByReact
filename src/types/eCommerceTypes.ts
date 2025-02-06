export type Categorietype = {
  backgroundImage?: string;
  backgroundSize?: "cover" | "auto" | "contain";
  backgroundPosition?: "inherit" | "center" | "50px 50px";
  Text?: string;
  link?: string;
};
export type TCart = {
  id: number;
  backgroundImage: string;
  Text: string;
  Price: number;
  CurrencyType?: string;
  description: string;
};
export type TgetAllItemstype = {
  sizeItems?: number;
  page?: number;
  id?: any;
};
export type TCategories = {
  "id": string,
  "code": string,
  "nameAr": string,
  "guid": string,
  "nameTranslate": {
    "en": string
  },
  "attributes": [],
  "level": number
}

export type TProduct = {
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
  ],
  quantity?: number
}
export type TFilterCategory =
  {
    id: number;
    code: string;
    nameAr: string;
    nameTranslate: {
      en: string;
    };
    attributes: [];
    parent: {
      id: number;
      attributes: [];
    };
    level: number;
  }
export type TFilterColor = { "id": string, "name": string, "code": string }

export type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed'

export type TRGB = "/^#([0-9a-f]{3}|[0-9a-f]{6})$/i"

export type TColors = {
  code: TRGB,
  id: string,
  name: string,
}

export type Tsize = { name: string }

export type TPolicies = {
  "id": string,
  "name": {
    "ar": string
  },
  "description": {
    "ar": string
  },
  "url": string,
  "guid": string
}
