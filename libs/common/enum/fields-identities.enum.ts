export enum IdentitiesReferenceEnum {
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  SUB_TITLE = 'sub_title',
  SUMMARY = 'summary',
  GENDER = 'gender',
  DIVERSITY = 'diversity',
  SUGGESTED_COVERAGE = 'suggested_coverage',
  SUGGESTED_GEOGRAPHY = 'suggested_geography',
  SUGGESTED_TEAM_PRIMARY = 'suggestedTeam[].team',
  IS_EDUCATION_HIDDEN_ARRAY = 'education[].is_hidden',
  EDUCATION_SCHOOL_ARRAY = 'education[].school',
  EDUCATION_DEGREE_ARRAY = 'education[].degree',
  EDUCATION_DATE_START_ARRAY = 'education[].date.start',
  EDUCATION_DATE_END_ARRAY = 'education[].date.end',
  EDUCATION_FIELD_OF_STUDY_ARRAY = 'education[].field_of_study',
  IS_EMPLOYMENT_PRIMARY_SELECTED_ARRAY = 'position_groups[].is_primary_selected',
  EMPLOYMENT_COMPANY_LOGO_ARRAY = 'position_groups[].company.logo',
  COMPANY_ARRAY = 'position_groups[].company',
  COMPANY_POSITION_TITLE_ARRAY = 'position_groups[].profile_positions[].title',
  COMPANY_POSITION_LOCATION_ARRAY = 'position_groups[].profile_positions[].location',
  COMPANY_START_DATE_ARRAY = 'position_groups[].date.start',
  COMPANY_END_DATE_ARRAY = 'position_groups[].date.end',
  START_FIRST_SELLSIDE = 'start_first_sellside',
  START_FIRST_BUYSIDE = 'start_first_buyside',
  START_CURRENT_EMPLOYEER = 'start_current_employeer',
  LOCATION_CITY = 'location.city',
  LOCATION_COUNTRY = 'location.country',
  WEBSITE_LINK = 'website_link',
  SUGGESTED_STRATEGY = 'suggestedStrategy[].strategy',
  SUGGESTED_SUBSTRATEGY = 'suggestedStrategy[].subStrategy[].strategy',
  SUGGESTED_TEAM_TEAM_ARRAY = 'suggestedTeam[].team',
  LANGUAGES_PRIMARY_LANGUAGE = 'languages.primary_locale.language',
  LANGUAGES_PROFILE_LANGUAGES_NAME_ARRAY = 'languages.profile_languages[].name',
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
  nativeLanguage = 'languages.primary_locale.language',
  city = 'location.city',
  degree = 'education[].degree',
  company = 'position_groups[].company',
}
