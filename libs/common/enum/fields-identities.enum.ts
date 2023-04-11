export enum IdentitiesReferenceEnum {
  GENDER = 'gender',
  DIVERSITY = 'diversity',
  SUGGESTED_COVERAGE = 'suggested_coverage',
  SUGGESTED_GEOGRAPHY = 'suggested_geography',
  IS_EDUCATION_HIDDEN = 'education[].is_hidden',
  IS_EMPLOYMENT_PRIMARY_SELECTED = 'position_groups[].is_primary_selected',
}

export enum JourneyTypesEnum {
  DEFAULT,
  STRINGIFY,
  INDEX_FIELD,
  DROPDOWN,
  FLAG,
}

export const TYPES_FOR_SCRAPPER = [
  JourneyTypesEnum.DEFAULT,
  JourneyTypesEnum.STRINGIFY,
  JourneyTypesEnum.INDEX_FIELD,
];
