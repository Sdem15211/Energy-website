import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import author from "./schemaTypes/author";
import pageType from "./schemaTypes/page";
import textWithIllustrationType from "./schemaTypes/textWithIllu";
import imageGalleryType from "./schemaTypes/imageGallery";
import { heroType } from "./schemaTypes/hero";
import { promotionType } from "./schemaTypes/promotion";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    pageType,
    textWithIllustrationType,
    imageGalleryType,
    heroType,
    promotionType,
  ],
};
