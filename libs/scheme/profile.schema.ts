import { HydratedDocument, Types, Schema, Document } from 'mongoose';
import { Language } from "./language.schema";
import { Education } from "./education.schema";
import { Degree } from "./degree.schema";
import { Upload } from "./upload.schema";

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

export class LanguagesSubDoc extends Document {
  primaryLocale: LocalSubDoc;
  supportedLocales: LocalSubDoc[];
  profileLanguages: Language[];
}

export class DateSubDoc extends Document {
  month: number;
  year: number;
}

export class PeriodSubDoc extends Document {
  start: DateSubDoc;
  end: DateSubDoc;
}

export class EducationSubDoc extends Document {
  date: PeriodSubDoc;
  school: Education;
  degree: Degree;
  field_of_study: string;
}

export class ProfileSubDoc extends Document {
  entity_urn: string;
  object_urn: string;
  first_name: string;
  last_name: string;
  sub_title: string;
  birth_date: string;
  profile_picture: string;
  summary: string;
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
  position_groups: [];
  volunteer_experiences: [];
  skills: [];
}

class Profile extends Document {
  upload: Upload;
  profile_id: string;
  edit_suggestions: [];
  created_at: Date;
  updated_at: Date;
  scraped_at: Date;
  profile: ProfileSubDoc;
}

const LocationSubDocSchema = new Schema<LocationSubDoc>({
  country: { type: String },
  short: { type: String },
  city: { type: String },
  state: { type: String },
  default: { type: String }
});

const LocalSubDocSchema = new Schema<LocalSubDoc>({
  country: { type: String },
  language: { type: String }
});

const LanguagesSubDocSchema = new Schema<LanguagesSubDoc>({
  primaryLocale: { type: LocalSubDocSchema },
  supportedLocales: { type: [LocalSubDocSchema] },
  profileLanguages: { type: [Schema.Types.ObjectId], ref: 'Language', required: true }
});

const DateSubDocSchema = new Schema<DateSubDoc>({
  month: { type: Number },
  year: { type: Number }
});

const PeriodSubDocSchema = new Schema<PeriodSubDoc>({
  start: { type: DateSubDocSchema },
  end: { type: DateSubDocSchema }
});

const EducationSubDocSchema = new Schema<EducationSubDoc>({
  date: { type: PeriodSubDocSchema },
  school: { type: Schema.Types.ObjectId, ref: 'Education', required: true },
  degree: { type: Schema.Types.ObjectId, ref: 'Degree', required: true },
  field_of_study: { type: String }
});

const ProfileSubDocSchema = new Schema<ProfileSubDoc>({
  entity_urn: { type: String },
  object_urn: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  sub_title: { type: String },
  birth_date: { type: String },
  profile_picture: { type: String },
  summary: { type: String },
  location: LocationSubDocSchema,
  premium: { type: Boolean },
  influencer: { type: Boolean },
  treasury_media: [],
  languages: LanguagesSubDocSchema,
  industry: { type: String },
  education: EducationSubDocSchema,
  patents: [String],
  awards: [String],
  certifications: [String],
  organizations: [String],
  projects: [String],
  publications: [String],
  courses: [String],
  test_scores: [String],
  position_groups: [String],
  volunteer_experiences: [String],
  skills: [String]
});

const ProfileSchema = new Schema<Profile>({
  upload: { type: Schema.Types.ObjectId, ref: 'Upload', required: true },
  profile_id: { type: String, required: true, unique: true },
  edit_suggestions: [],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  scraped_at: Date,
  profile: ProfileSubDocSchema
});

export type ProfileDocument = HydratedDocument<Profile>;

export { ProfileSchema, Profile };