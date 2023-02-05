import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentHomepageHomepageHero = {
  __typename?: 'ComponentHomepageHomepageHero';
  Text?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = ComponentHomepageHomepageHero | Grade | I18NLocale | Image | Location | Route | Sector | StrapiGoogleAuthGoogleCredential | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Grade = {
  __typename?: 'Grade';
  createdAt?: Maybe<Scalars['DateTime']>;
  grade: Scalars['String'];
  routes?: Maybe<RouteRelationResponseCollection>;
  score: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GradeRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GradeEntity = {
  __typename?: 'GradeEntity';
  attributes?: Maybe<Grade>;
  id?: Maybe<Scalars['ID']>;
};

export type GradeEntityResponse = {
  __typename?: 'GradeEntityResponse';
  data?: Maybe<GradeEntity>;
};

export type GradeEntityResponseCollection = {
  __typename?: 'GradeEntityResponseCollection';
  data: Array<GradeEntity>;
  meta: ResponseCollectionMeta;
};

export type GradeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GradeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  grade?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<GradeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GradeFiltersInput>>>;
  routes?: InputMaybe<RouteFiltersInput>;
  score?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GradeInput = {
  grade?: InputMaybe<Scalars['String']>;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  score?: InputMaybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type Image = {
  __typename?: 'Image';
  createdAt?: Maybe<Scalars['DateTime']>;
  data?: Maybe<Scalars['JSON']>;
  file?: Maybe<UploadFileEntityResponse>;
  location?: Maybe<LocationEntityResponse>;
  name: Scalars['String'];
  nextImage?: Maybe<ImageEntityResponse>;
  order: Scalars['Int'];
  prevImage?: Maybe<ImageEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  routeCount: Scalars['Int'];
  routes?: Maybe<RouteRelationResponseCollection>;
  sector?: Maybe<SectorEntityResponse>;
  slug: Scalars['String'];
  svg?: Maybe<Scalars['JSON']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ImageRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ImageEntity = {
  __typename?: 'ImageEntity';
  attributes?: Maybe<Image>;
  id?: Maybe<Scalars['ID']>;
};

export type ImageEntityResponse = {
  __typename?: 'ImageEntityResponse';
  data?: Maybe<ImageEntity>;
};

export type ImageEntityResponseCollection = {
  __typename?: 'ImageEntityResponseCollection';
  data: Array<ImageEntity>;
  meta: ResponseCollectionMeta;
};

export type ImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ImageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<LocationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ImageFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  routes?: InputMaybe<RouteFiltersInput>;
  sector?: InputMaybe<SectorFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  svg?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ImageInput = {
  data?: InputMaybe<Scalars['JSON']>;
  file?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sector?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['JSON']>;
};

export type ImageRelationResponseCollection = {
  __typename?: 'ImageRelationResponseCollection';
  data: Array<ImageEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Location = {
  __typename?: 'Location';
  coverImage?: Maybe<ImageEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  imageCount: Scalars['Int'];
  images?: Maybe<ImageRelationResponseCollection>;
  name: Scalars['String'];
  order: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  routeCount: Scalars['Int'];
  routes?: Maybe<RouteRelationResponseCollection>;
  sectorCount: Scalars['Int'];
  sectors?: Maybe<SectorRelationResponseCollection>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LocationImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LocationRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type LocationSectorsArgs = {
  filters?: InputMaybe<SectorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LocationEntity = {
  __typename?: 'LocationEntity';
  attributes?: Maybe<Location>;
  id?: Maybe<Scalars['ID']>;
};

export type LocationEntityResponse = {
  __typename?: 'LocationEntityResponse';
  data?: Maybe<LocationEntity>;
};

export type LocationEntityResponseCollection = {
  __typename?: 'LocationEntityResponseCollection';
  data: Array<LocationEntity>;
  meta: ResponseCollectionMeta;
};

export type LocationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  images?: InputMaybe<ImageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LocationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LocationFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  routes?: InputMaybe<RouteFiltersInput>;
  sectors?: InputMaybe<SectorFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LocationInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createGrade?: Maybe<GradeEntityResponse>;
  createImage?: Maybe<ImageEntityResponse>;
  createLocation?: Maybe<LocationEntityResponse>;
  createRoute?: Maybe<RouteEntityResponse>;
  createSector?: Maybe<SectorEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteGrade?: Maybe<GradeEntityResponse>;
  deleteImage?: Maybe<ImageEntityResponse>;
  deleteLocation?: Maybe<LocationEntityResponse>;
  deleteRoute?: Maybe<RouteEntityResponse>;
  deleteSector?: Maybe<SectorEntityResponse>;
  deleteStrapiGoogleAuthGoogleCredential?: Maybe<StrapiGoogleAuthGoogleCredentialEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  reorderImages?: Maybe<ImageEntityResponseCollection>;
  reorderLocations?: Maybe<LocationEntityResponseCollection>;
  reorderRoutes?: Maybe<RouteEntityResponseCollection>;
  reorderSectors?: Maybe<SectorEntityResponseCollection>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateGrade?: Maybe<GradeEntityResponse>;
  updateImage?: Maybe<ImageEntityResponse>;
  updateLocation?: Maybe<LocationEntityResponse>;
  updateRoute?: Maybe<RouteEntityResponse>;
  updateSector?: Maybe<SectorEntityResponse>;
  updateStrapiGoogleAuthGoogleCredential?: Maybe<StrapiGoogleAuthGoogleCredentialEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateGradeArgs = {
  data: GradeInput;
};


export type MutationCreateImageArgs = {
  data: ImageInput;
};


export type MutationCreateLocationArgs = {
  data: LocationInput;
};


export type MutationCreateRouteArgs = {
  data: RouteInput;
};


export type MutationCreateSectorArgs = {
  data: SectorInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteGradeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSectorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationReorderImagesArgs = {
  data: Array<ReorderData>;
};


export type MutationReorderLocationsArgs = {
  data: Array<ReorderData>;
};


export type MutationReorderRoutesArgs = {
  data: Array<ReorderData>;
};


export type MutationReorderSectorsArgs = {
  data: Array<ReorderData>;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGradeArgs = {
  data: GradeInput;
  id: Scalars['ID'];
};


export type MutationUpdateImageArgs = {
  data: ImageInput;
  id: Scalars['ID'];
};


export type MutationUpdateLocationArgs = {
  data: LocationInput;
  id: Scalars['ID'];
};


export type MutationUpdateRouteArgs = {
  data: RouteInput;
  id: Scalars['ID'];
};


export type MutationUpdateSectorArgs = {
  data: SectorInput;
  id: Scalars['ID'];
};


export type MutationUpdateStrapiGoogleAuthGoogleCredentialArgs = {
  data: StrapiGoogleAuthGoogleCredentialInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  grade?: Maybe<GradeEntityResponse>;
  grades?: Maybe<GradeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  image?: Maybe<ImageEntityResponse>;
  imageBySlug?: Maybe<ImageEntityResponse>;
  images?: Maybe<ImageEntityResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  locationBySlug?: Maybe<LocationEntityResponse>;
  locations?: Maybe<LocationEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  route?: Maybe<RouteEntityResponse>;
  routeBySlug?: Maybe<RouteEntityResponse>;
  routes?: Maybe<RouteEntityResponseCollection>;
  sector?: Maybe<SectorEntityResponse>;
  sectorBySlug?: Maybe<SectorEntityResponse>;
  sectors?: Maybe<SectorEntityResponseCollection>;
  strapiGoogleAuthGoogleCredential?: Maybe<StrapiGoogleAuthGoogleCredentialEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryGradeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGradesArgs = {
  filters?: InputMaybe<GradeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryImageBySlugArgs = {
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<Scalars['String']>;
};


export type QueryImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLocationBySlugArgs = {
  location?: InputMaybe<Scalars['String']>;
};


export type QueryLocationsArgs = {
  filters?: InputMaybe<LocationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRouteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRouteBySlugArgs = {
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  route?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<Scalars['String']>;
};


export type QueryRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySectorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySectorBySlugArgs = {
  location?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<Scalars['String']>;
};


export type QuerySectorsArgs = {
  filters?: InputMaybe<SectorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStrapiGoogleAuthGoogleCredentialArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ReorderData = {
  id: Scalars['ID'];
  order: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Route = {
  __typename?: 'Route';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<GradeEntityResponse>;
  images?: Maybe<ImageRelationResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  name: Scalars['String'];
  order: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  sector?: Maybe<SectorEntityResponse>;
  sitstart?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type RouteImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RouteEntity = {
  __typename?: 'RouteEntity';
  attributes?: Maybe<Route>;
  id?: Maybe<Scalars['ID']>;
};

export type RouteEntityResponse = {
  __typename?: 'RouteEntityResponse';
  data?: Maybe<RouteEntity>;
};

export type RouteEntityResponseCollection = {
  __typename?: 'RouteEntityResponseCollection';
  data: Array<RouteEntity>;
  meta: ResponseCollectionMeta;
};

export type RouteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RouteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  grade?: InputMaybe<GradeFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  images?: InputMaybe<ImageFiltersInput>;
  location?: InputMaybe<LocationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RouteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RouteFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sector?: InputMaybe<SectorFiltersInput>;
  sitstart?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RouteInput = {
  description?: InputMaybe<Scalars['String']>;
  grade?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  location?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sector?: InputMaybe<Scalars['ID']>;
  sitstart?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type RouteRelationResponseCollection = {
  __typename?: 'RouteRelationResponseCollection';
  data: Array<RouteEntity>;
};

export type Sector = {
  __typename?: 'Sector';
  coverImage?: Maybe<ImageEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  imageCount: Scalars['Int'];
  images?: Maybe<ImageRelationResponseCollection>;
  location?: Maybe<LocationEntityResponse>;
  name: Scalars['String'];
  order: Scalars['Int'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  routeCount: Scalars['Int'];
  routes?: Maybe<RouteRelationResponseCollection>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SectorImagesArgs = {
  filters?: InputMaybe<ImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SectorRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SectorEntity = {
  __typename?: 'SectorEntity';
  attributes?: Maybe<Sector>;
  id?: Maybe<Scalars['ID']>;
};

export type SectorEntityResponse = {
  __typename?: 'SectorEntityResponse';
  data?: Maybe<SectorEntity>;
};

export type SectorEntityResponseCollection = {
  __typename?: 'SectorEntityResponseCollection';
  data: Array<SectorEntity>;
  meta: ResponseCollectionMeta;
};

export type SectorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SectorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  images?: InputMaybe<ImageFiltersInput>;
  location?: InputMaybe<LocationFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SectorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SectorFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  routes?: InputMaybe<RouteFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SectorInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  location?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  routes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
};

export type SectorRelationResponseCollection = {
  __typename?: 'SectorRelationResponseCollection';
  data: Array<SectorEntity>;
};

export type StrapiGoogleAuthGoogleCredential = {
  __typename?: 'StrapiGoogleAuthGoogleCredential';
  createdAt?: Maybe<Scalars['DateTime']>;
  google_client_id: Scalars['String'];
  google_client_secret: Scalars['String'];
  google_redirect_url: Scalars['String'];
  google_scopes: Scalars['JSON'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StrapiGoogleAuthGoogleCredentialEntity = {
  __typename?: 'StrapiGoogleAuthGoogleCredentialEntity';
  attributes?: Maybe<StrapiGoogleAuthGoogleCredential>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGoogleAuthGoogleCredentialEntityResponse = {
  __typename?: 'StrapiGoogleAuthGoogleCredentialEntityResponse';
  data?: Maybe<StrapiGoogleAuthGoogleCredentialEntity>;
};

export type StrapiGoogleAuthGoogleCredentialInput = {
  google_client_id?: InputMaybe<Scalars['String']>;
  google_client_secret?: InputMaybe<Scalars['String']>;
  google_redirect_url?: InputMaybe<Scalars['String']>;
  google_scopes?: InputMaybe<Scalars['JSON']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  fullUrl: Scalars['String'];
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar?: Maybe<UploadFileEntityResponse>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  avatar?: InputMaybe<Scalars['ID']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type FileFragment = { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null };

export type RouteItemFragment = { __typename?: 'RouteEntity', id?: string | null, attributes?: { __typename?: 'Route', name: string, slug: string, order: number } | null };

export type ImageItemFragment = { __typename?: 'ImageEntity', id?: string | null, attributes?: { __typename?: 'Image', name: string, slug: string, order: number, file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null } | null } | null };

export type ImageFragment = { __typename?: 'ImageEntity', id?: string | null, attributes?: { __typename?: 'Image', name: string, slug: string, order: number, data?: any | null, file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null } | null } | null };

export type SectorItemFragment = { __typename?: 'SectorEntity', id?: string | null, attributes?: { __typename?: 'Sector', name: string, slug: string, order: number } | null };

export type SectorFragment = { __typename?: 'SectorEntity', id?: string | null, attributes?: { __typename?: 'Sector', name: string, slug: string, order: number, location?: { __typename?: 'LocationEntityResponse', data?: { __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string } | null } | null } | null, images?: { __typename?: 'ImageRelationResponseCollection', data: Array<{ __typename?: 'ImageEntity', id?: string | null, attributes?: { __typename?: 'Image', name: string, slug: string, order: number, file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null } | null };

export type LocationItemFragment = { __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string, order: number } | null };

export type LocationFragment = { __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string, order: number, sectors?: { __typename?: 'SectorRelationResponseCollection', data: Array<{ __typename?: 'SectorEntity', id?: string | null, attributes?: { __typename?: 'Sector', name: string, slug: string, order: number } | null }> } | null } | null };

export type ImageQueryVariables = Exact<{
  location?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;


export type ImageQuery = { __typename?: 'Query', image?: { __typename?: 'ImageEntityResponse', data?: { __typename?: 'ImageEntity', id?: string | null, attributes?: { __typename?: 'Image', name: string, slug: string, order: number, data?: any | null, file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null } | null } | null } | null } | null };

export type LocationQueryVariables = Exact<{
  location?: InputMaybe<Scalars['String']>;
}>;


export type LocationQuery = { __typename?: 'Query', location?: { __typename?: 'LocationEntityResponse', data?: { __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string, order: number, sectors?: { __typename?: 'SectorRelationResponseCollection', data: Array<{ __typename?: 'SectorEntity', id?: string | null, attributes?: { __typename?: 'Sector', name: string, slug: string, order: number } | null }> } | null } | null } | null } | null };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations?: { __typename?: 'LocationEntityResponseCollection', data: Array<{ __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string, order: number } | null }> } | null };

export type SectorQueryVariables = Exact<{
  location?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<Scalars['String']>;
}>;


export type SectorQuery = { __typename?: 'Query', sector?: { __typename?: 'SectorEntityResponse', data?: { __typename?: 'SectorEntity', id?: string | null, attributes?: { __typename?: 'Sector', name: string, slug: string, order: number, location?: { __typename?: 'LocationEntityResponse', data?: { __typename?: 'LocationEntity', id?: string | null, attributes?: { __typename?: 'Location', name: string, slug: string } | null } | null } | null, images?: { __typename?: 'ImageRelationResponseCollection', data: Array<{ __typename?: 'ImageEntity', id?: string | null, attributes?: { __typename?: 'Image', name: string, slug: string, order: number, file?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, fullUrl: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export const RouteItemFragmentDoc = gql`
    fragment RouteItem on RouteEntity {
  id
  attributes {
    name
    slug
    order
  }
}
    `;
export const FileFragmentDoc = gql`
    fragment File on UploadFileEntity {
  id
  attributes {
    name
    fullUrl
    width
    height
    formats
  }
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on ImageEntity {
  id
  attributes {
    name
    slug
    order
    data
    file {
      data {
        ...File
      }
    }
  }
}
    ${FileFragmentDoc}`;
export const ImageItemFragmentDoc = gql`
    fragment ImageItem on ImageEntity {
  id
  attributes {
    name
    slug
    order
    file {
      data {
        ...File
      }
    }
  }
}
    ${FileFragmentDoc}`;
export const SectorFragmentDoc = gql`
    fragment Sector on SectorEntity {
  id
  attributes {
    name
    slug
    order
    location {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    images(sort: "order", pagination: {start: 0, limit: -1}) {
      data {
        ...ImageItem
      }
    }
  }
}
    ${ImageItemFragmentDoc}`;
export const LocationItemFragmentDoc = gql`
    fragment LocationItem on LocationEntity {
  id
  attributes {
    name
    slug
    order
  }
}
    `;
export const SectorItemFragmentDoc = gql`
    fragment SectorItem on SectorEntity {
  id
  attributes {
    name
    slug
    order
  }
}
    `;
export const LocationFragmentDoc = gql`
    fragment Location on LocationEntity {
  id
  attributes {
    name
    slug
    order
    sectors(sort: "order", pagination: {start: 0, limit: -1}) {
      data {
        ...SectorItem
      }
    }
  }
}
    ${SectorItemFragmentDoc}`;
export const ImageDocument = gql`
    query image($location: String, $sector: String, $image: String) {
  image: imageBySlug(location: $location, sector: $sector, image: $image) {
    data {
      ...Image
    }
  }
}
    ${ImageFragmentDoc}`;
export const LocationDocument = gql`
    query location($location: String) {
  location: locationBySlug(location: $location) {
    data {
      ...Location
    }
  }
}
    ${LocationFragmentDoc}`;
export const LocationsDocument = gql`
    query locations {
  locations(sort: "order", pagination: {start: 0, limit: -1}) {
    data {
      ...LocationItem
    }
  }
}
    ${LocationItemFragmentDoc}`;
export const SectorDocument = gql`
    query sector($location: String, $sector: String) {
  sector: sectorBySlug(location: $location, sector: $sector) {
    data {
      ...Sector
    }
  }
}
    ${SectorFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    image(variables?: ImageQueryVariables, options?: C): Promise<ImageQuery> {
      return requester<ImageQuery, ImageQueryVariables>(ImageDocument, variables, options) as Promise<ImageQuery>;
    },
    location(variables?: LocationQueryVariables, options?: C): Promise<LocationQuery> {
      return requester<LocationQuery, LocationQueryVariables>(LocationDocument, variables, options) as Promise<LocationQuery>;
    },
    locations(variables?: LocationsQueryVariables, options?: C): Promise<LocationsQuery> {
      return requester<LocationsQuery, LocationsQueryVariables>(LocationsDocument, variables, options) as Promise<LocationsQuery>;
    },
    sector(variables?: SectorQueryVariables, options?: C): Promise<SectorQuery> {
      return requester<SectorQuery, SectorQueryVariables>(SectorDocument, variables, options) as Promise<SectorQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;