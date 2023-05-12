import { HydratedDocument, Schema, Document } from 'mongoose';
import { Upload } from './upload.schema';

export class LocationSubDoc extends Document {
  country: string;
  short: string;
  city: string;
  state: string;
  default: string;
}

export class LocalSubDoc extends Document {
  country: string;
  language: string;
}

export class ProfileLanguageSubDoc extends Document {
  name: string;
  proficiency: string;
}

export class LanguagesSubDoc extends Document {
  primary_locale: LocalSubDoc;
  supported_locales: LocalSubDoc[];
  profile_languages: ProfileLanguageSubDoc[];
}

export class DateSubDoc extends Document {
  month: number;
  year: number;
}

export class BirthDateSubDoc extends Document {
  month: number;
  day: number;
}

export class PeriodSubDoc extends Document {
  start: DateSubDoc;
  end: DateSubDoc;
}

export class EducationSubDoc extends Document {
  date: PeriodSubDoc;
  school: string;
  degree: string;
  field_of_study: string;
  is_hidden: boolean;
}

export class CompanySubDoc extends Document {
  name: string;
  logo: string;
  url: string;
  employees: DateSubDoc;
}

export class ProfilePositionSubDoc extends Document {
  location: string;
  date: PeriodSubDoc;
  company: string;
  description: string;
  title: string;
}

export class PositionGroupSubDoc extends Document {
  company: string;
  companyUrl: string;
  companyLogo: string;
  date: PeriodSubDoc;
  profile_positions: ProfilePositionSubDoc[];
}

export class SuggestedTeamSubDoc extends Document {
  team: string;
}

export class SuggestedStrategySubDoc extends Document {
  strategy: string;
  subStrategy: SubstrategySubDoc[];
}

export class SubstrategySubDoc extends Document {
  strategy: string;
}

export class ProfileSubDoc extends Document {
  entity_urn: string;
  object_urn: string;
  first_name: string;
  last_name: string;
  sub_title: string;
  birth_date: BirthDateSubDoc;
  profile_picture: string;
  summary: string;
  website_link: string;
  location: LocationSubDoc;
  premium: boolean;
  influencer: boolean;
  treasury_media: [];
  languages: LanguagesSubDoc;
  industry: string;
  education: EducationSubDoc[];
  patents: [];
  awards: [];
  certifications: [];
  organizations: [];
  projects: [];
  publications: [];
  courses: [];
  test_scores: [];
  position_groups: PositionGroupSubDoc[];
  volunteer_experiences: [];
  skills: [];
  suggestedTeam: SuggestedTeamSubDoc[];
  suggestedStrategy: SuggestedStrategySubDoc[];
  suggested_geography: string;
  suggested_coverage: string;
  gender: string;
  start_first_sellside: string;
  start_current_employeer: string;
  start_first_buyside: string;
}

class Profile extends Document {
  upload: Upload;
  profile_id: string;
  edit_suggestions: [];
  created_at: Date;
  updated_at: Date;
  scraped_at: Date;
  profile: ProfileSubDoc;
  is_archived: boolean;
}

const SuggestedTeamSubDocSchema = new Schema<SuggestedTeamSubDoc>({
  team: { type: String },
});

const SubstrategySubDocShema = new Schema<SubstrategySubDoc>({
  strategy: [{ type: String }],
});

const SuggestedStrategySubDocSchema = new Schema<SuggestedStrategySubDoc>({
  strategy: { type: String },
  subStrategy: [SubstrategySubDocShema],
});

const LocationSubDocSchema = new Schema<LocationSubDoc>({
  country: { type: String },
  short: { type: String },
  city: { type: String },
  state: { type: String },
  default: { type: String },
});

const LocalSubDocSchema = new Schema<LocalSubDoc>({
  country: { type: String },
  language: { type: String },
});

const ProfileLanguageSubDocSchema = new Schema<ProfileLanguageSubDoc>({
  name: { type: String },
  proficiency: { type: String },
});

const LanguagesSubDocSchema = new Schema<LanguagesSubDoc>({
  primary_locale: { type: LocalSubDocSchema },
  supported_locales: { type: [LocalSubDocSchema] },
  profile_languages: {
    type: [ProfileLanguageSubDocSchema],
  },
});

const DateSubDocSchema = new Schema<DateSubDoc>({
  month: { type: Number },
  year: { type: Number },
});

const BirthDateSubDocSchema = new Schema<BirthDateSubDoc>({
  month: { type: Number },
  day: { type: Number },
});

const PeriodSubDocSchema = new Schema<PeriodSubDoc>({
  start: { type: DateSubDocSchema },
  end: { type: DateSubDocSchema },
});

const EducationSubDocSchema = new Schema<EducationSubDoc>({
  date: { type: PeriodSubDocSchema },
  school: { type: String },
  degree: { type: String },
  field_of_study: { type: String },
  is_hidden: { type: Boolean },
});

const CompanySubDocSchema = new Schema<CompanySubDoc>({
  name: { type: String },
  logo: { type: String },
  url: { type: String },
  employees: { type: DateSubDocSchema },
});

const ProfilePositionSubDocSchema = new Schema<ProfilePositionSubDoc>({
  location: { type: String },
  date: { type: PeriodSubDocSchema },
  company: { type: String },
  description: { type: String },
  title: { type: String },
});

const PositionGroupSubDocSchema = new Schema<PositionGroupSubDoc>({
  company: { type: String },
  companyUrl: { type: String },
  companyLogo: { type: String },
  date: { type: PeriodSubDocSchema },
  profile_positions: [ProfilePositionSubDocSchema],
});

const ProfileSubDocSchema = new Schema<ProfileSubDoc>({
  entity_urn: { type: String },
  object_urn: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  sub_title: { type: String },
  birth_date: BirthDateSubDocSchema,
  profile_picture: { type: String },
  summary: { type: String },
  website_link: { type: String },
  location: LocationSubDocSchema,
  premium: { type: Boolean },
  influencer: { type: Boolean },
  treasury_media: [],
  languages: LanguagesSubDocSchema,
  industry: { type: String },
  education: [EducationSubDocSchema],
  patents: [{ type: Schema.Types.Mixed }],
  awards: [{ type: Schema.Types.Mixed }],
  certifications: [{ type: Schema.Types.Mixed }],
  organizations: [{ type: Schema.Types.Mixed }],
  projects: [{ type: Schema.Types.Mixed }],
  publications: [{ type: Schema.Types.Mixed }],
  courses: [{ type: Schema.Types.Mixed }],
  test_scores: [{ type: Schema.Types.Mixed }],
  position_groups: [PositionGroupSubDocSchema],
  volunteer_experiences: [{ type: Schema.Types.Mixed }],
  skills: [String],
  suggestedTeam: [SuggestedTeamSubDocSchema],
  suggestedStrategy: [SuggestedStrategySubDocSchema],
  suggested_geography: { type: String },
  suggested_coverage: { type: String },
  gender: { type: String },
  start_first_sellside: { type: String },
  start_current_employeer: { type: String },
  start_first_buyside: { type: String },
});

const ProfileSchema = new Schema<Profile>({
  upload: { type: Schema.Types.ObjectId, ref: 'Upload', required: true },
  profile_id: { type: String, required: true, unique: true },
  edit_suggestions: [],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  scraped_at: Date,
  profile: ProfileSubDocSchema,
});

export type ProfileDocument = HydratedDocument<Profile>;

export { ProfileSchema, Profile };
