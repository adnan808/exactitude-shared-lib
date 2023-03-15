import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type EducationDocument = HydratedDocument<Education>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Education extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  logo: string;

  @Prop({ type: [String] })
  names: string[];

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
