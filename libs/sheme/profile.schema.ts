import { HydratedDocument, Types, Schema } from 'mongoose';
import { Language } from "./language.schema";
import { Education } from "./education.schema";
import { Degree } from "./degree.schema";
import { Upload } from "./upload.schema";

export class LocationSubDoc {
  country: string;
  short: string;
  city: string;
  state: string;
  default: string;
}

export class LocalSubDoc {
  country: string;
  language: string;
}

export class LanguagesSubDoc {
  primaryLocale: LocalSubDoc;
  supportedLocales: LocalSubDoc[];
  profileLanguages: Language[];
}

export class DateSubDoc {
  month: number;
  year: number;
}

export class PeriodSubDoc {
  start: DateSubDoc;
  end: DateSubDoc;
}

export class EducationSubDoc {
  date: PeriodSubDoc;
  school: Education;
  degree: Degree;
  field_of_study: string;
}

export class ProfileSubDoc {
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

const ProfileSchema = new Schema<Profile>({
  upload: { type: Types.ObjectId, ref: 'Upload', required: true },
  profile_id: { type: String, required: true, unique: true },
  edit_suggestions: [],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  scraped_at: Date,
  profile: { type: ProfileSubDoc }
});

export type ProfileDocument = HydratedDocument<Profile>;

export { ProfileSchema, Profile };