import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type LanguageDocument = HydratedDocument<Language>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Language extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: [String] })
  names: string[];

  @Prop({ type: String })
  proficiency: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
