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
import { aboutUsType } from "./schemaTypes/aboutUs";
import { metricsType } from "./schemaTypes/Metrics";
import { ourExpertsType } from "./schemaTypes/OurExperts";
import { solutionsType } from "./schemaTypes/Solutions";
import { ourPhilosophy } from "./schemaTypes/ourPhilosophy";

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
    aboutUsType,
    metricsType,
    ourExpertsType,
    solutionsType,
    ourPhilosophy,
  ],
};
