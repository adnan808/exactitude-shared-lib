export enum IdentitiesReferenceEnum {
  GENDER = 'gender',
  DIVERSITY = 'diversity',
  SUGGESTED_COVERAGE = 'suggested_coverage',
  SUGGESTED_GEOGRAPHY = 'suggested_geography',
  SUGGESTED_TEAM_PRIMARY = 'suggested_team_primary',
  SUGGESTED_TEAMS = 'suggested_teams_secondary',
  IS_EDUCATION_HIDDEN = 'education[].is_hidden',
  EDUCATION_SCHOOL = 'education[].school',
  EDUCATION_DEGREE = 'education[].degree',
  EDUCATION_DATE_START = 'education[].date.start',
  EDUCATION_DATE_END = 'education[].date.end',
  EDUCATION_FIELD_OF_STUDY = 'education[].field_of_study',
  IS_EMPLOYMENT_PRIMARY_SELECTED = 'position_groups[].is_primary_selected',
  START_FIRST_SELLSIDE = 'start_first_sellside',
  START_FIRST_BUYSIDE = 'start_first_buyside',
  START_CURRENT_EMPLOYEER = 'start_current_employeer',
  LOCATION_CITY = 'location.city',
  LOCATION_COUNTRY = 'location.country',
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
