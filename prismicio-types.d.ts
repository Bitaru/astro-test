// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AwfawfawfDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for awfawfawf documents
 */
interface AwfawfawfDocumentData {
  /**
   * Slice Zone field in *awfawfawf*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: awfawfawf.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AwfawfawfDocumentDataSlicesSlice>;
}

/**
 * awfawfawf document from Prismic
 *
 * - **API ID**: `awfawfawf`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AwfawfawfDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AwfawfawfDocumentData>,
    "awfawfawf",
    Lang
  >;

export type AllDocumentTypes = AwfawfawfDocument;

/**
 * Primary content in *SidesBlock → Primary*
 */
export interface SidesBlockSliceDefaultPrimary {
  /**
   * sgawfwf field in *SidesBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sides_block.primary.sgawfwf
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sgawfwf: prismic.RichTextField;

  /**
   * awfawf field in *SidesBlock → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: sides_block.primary.awfawf
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  awfawf: prismic.SelectField<"1" | "2">;

  /**
   * awfawf field in *SidesBlock → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: sides_block.primary.2322eessg
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  "2322eessg": prismic.EmbedField;
}

/**
 * Primary content in *SidesBlock → Items*
 */
export interface SidesBlockSliceDefaultItem {
  /**
   * awfawf field in *SidesBlock → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: sides_block.items[].awfawf
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  awfawf: prismic.ColorField;
}

/**
 * Default variation for SidesBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SidesBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SidesBlockSliceDefaultPrimary>,
  Simplify<SidesBlockSliceDefaultItem>
>;

/**
 * Slice variation for *SidesBlock*
 */
type SidesBlockSliceVariation = SidesBlockSliceDefault;

/**
 * SidesBlock Shared Slice
 *
 * - **API ID**: `sides_block`
 * - **Description**: SidesBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SidesBlockSlice = prismic.SharedSlice<
  "sides_block",
  SidesBlockSliceVariation
>;

/**
 * Primary content in *TestBlock → Primary*
 */
export interface TestBlockSliceDefaultPrimary {
  /**
   * afawf field in *TestBlock → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: test_block.primary.afawf
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  afawf: prismic.LinkField;
}

/**
 * Default variation for TestBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TestBlock*
 */
type TestBlockSliceVariation = TestBlockSliceDefault;

/**
 * TestBlock Shared Slice
 *
 * - **API ID**: `test_block`
 * - **Description**: TestBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestBlockSlice = prismic.SharedSlice<
  "test_block",
  TestBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AwfawfawfDocument,
      AwfawfawfDocumentData,
      AwfawfawfDocumentDataSlicesSlice,
      AllDocumentTypes,
      SidesBlockSlice,
      SidesBlockSliceDefaultPrimary,
      SidesBlockSliceDefaultItem,
      SidesBlockSliceVariation,
      SidesBlockSliceDefault,
      TestBlockSlice,
      TestBlockSliceDefaultPrimary,
      TestBlockSliceVariation,
      TestBlockSliceDefault,
    };
  }
}
