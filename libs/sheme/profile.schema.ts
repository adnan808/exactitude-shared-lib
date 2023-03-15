import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Document } from 'mongoose';
import { Language } from './language.schema';
import { Education } from './education.schema';
import { Degree } from './degree.schema';
import { Upload } from './upload.schema';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ _id: false })
export class LocationSubDoc extends Document {
  @Prop({ type: String })
  country: string;

  @Prop({ type: String })
  short: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  state: string;

  @Prop({ type: String })
  default: string;
}

@Schema({ _id: false })
export class LocalSubDoc extends Document {
  @Prop({ type: String })
  country: string;

  @Prop({ type: String })
  language: string;
}

@Schema({ _id: false })
export class LanguagesSubDoc extends Document {
  @Prop({ type: LocalSubDoc })
  primaryLocale: LocalSubDoc;

  @Prop({ type: LocalSubDoc })
  supportedLocales: LocalSubDoc[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Language' }] })
  profileLanguages: Language[];
}

@Schema({ _id: false })
export class DateSubDoc extends Document {
  @Prop({ type: Number })
  month: number;

  @Prop({ type: Number })
  year: number;
}

@Schema({ _id: false })
export class PeriodSubDoc extends Document {
  @Prop({ type: DateSubDoc })
  start: DateSubDoc;

  @Prop({ type: DateSubDoc })
  end: DateSubDoc;
}

@Schema({ _id: false })
export class EducationSubDoc extends Document {
  @Prop({ type: PeriodSubDoc })
  date: PeriodSubDoc;

  @Prop({ type: Types.ObjectId, ref: 'Education' })
  school: Education;

  @Prop({ type: Types.ObjectId, ref: 'Degree' })
  degree: Degree;

  @Prop({ type: String })
  field_of_study: string;
}

@Schema()
export class ProfileSubDoc extends Document {
  @Prop({ type: String })
  entity_urn: string;

  @Prop({ type: String })
  object_urn: string;

  @Prop({ type: String })
  first_name: string;

  @Prop({ type: String })
  last_name: string;

  @Prop({ type: String })
  sub_title: string;

  @Prop({ type: String })
  birth_date: string;

  @Prop({ type: String })
  profile_picture: string;

  @Prop({ type: String })
  summary: string;

  @Prop({ type: LocationSubDoc })
  location: LocationSubDoc;

  @Prop({ type: Boolean })
  premium: boolean;

  @Prop({ type: Boolean })
  influencer: boolean;

  @Prop({ type: [] })
  treasury_media: [];

  @Prop({ type: LanguagesSubDoc })
  languages: LanguagesSubDoc;

  @Prop({ type: String })
  industry: string;

  @Prop({ type: EducationSubDoc })
  education: EducationSubDoc[];

  @Prop({ type: [] })
  patents: [];

  @Prop({ type: [] })
  awards: [];

  @Prop({ type: [] })
  certifications: [];

  @Prop({ type: [] })
  organizations: [];

  @Prop({ type: [] })
  projects: [];

  @Prop({ type: [] })
  publications: [];

  @Prop({ type: [] })
  courses: [];

  @Prop({ type: [] })
  test_scores: [];

  @Prop({ type: [] })
  position_groups: [];

  @Prop({ type: [] })
  volunteer_experiences: [];

  @Prop({ type: [] })
  skills: [];
}

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: false } })
export class Profile {
  @Prop({ type: Types.ObjectId, ref: 'Upload' })
  upload: Upload;

  @Prop({ type: String, required: true, unique: true })
  profile_id: string;

  @Prop({ type: [] })
  edit_suggestions: [];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop({ type: Date })
  scraped_at: Date;

  @Prop({ type: ProfileSubDoc })
  profile: ProfileSubDoc;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
