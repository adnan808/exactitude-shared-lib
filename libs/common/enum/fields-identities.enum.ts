export enum IdentitiesReferenceEnum {
  GENDER = 'gender',
  DIVERSITY = 'diversity',
  SUGGESTED_COVERAGE = 'suggested_coverage',
  SUGGESTED_GEOGRAPHY = 'suggested_geography',
  SUGGESTED_TEAM_PRIMARY = 'suggested_team_primary',
  SUGGESTED_TEAMS = 'suggested_teams_secondary',
  IS_EDUCATION_HIDDEN_ARRAY = 'education[].is_hidden',
  EDUCATION_SCHOOL_ARRAY = 'education[].school',
  EDUCATION_DEGREE_ARRAY = 'education[].degree',
  EDUCATION_DATE_START_ARRAY = 'education[].date.start',
  EDUCATION_DATE_END_ARRAY = 'education[].date.end',
  EDUCATION_FIELD_OF_STUDY_ARRAY = 'education[].field_of_study',
  IS_EMPLOYMENT_PRIMARY_SELECTED_ARRAY = 'position_groups[].is_primary_selected',
  START_FIRST_SELLSIDE = 'start_first_sellside',
  START_FIRST_BUYSIDE = 'start_first_buyside',
  START_CURRENT_EMPLOYEER = 'start_current_employeer',
  LOCATION_CITY = 'location.city',
  LOCATION_COUNTRY = 'location.country',
  WEBSITE_LINK = 'website_link',
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

export enum DictionariesEnum {
  country = 'location.country',
  education = 'education[].school',
  language = 'languages.profile_languages[].name',
  city = 'location.city',
  degree = 'education[].degree',
  company = 'position_groups[].company',
}
