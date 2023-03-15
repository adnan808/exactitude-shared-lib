import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type DegreeDocument = HydratedDocument<Degree>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Degree extends Document {
  @Prop({ type: [String] })
  degree_names: string[];

  @Prop({ type: String })
  degree_name: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const DegreeSchema = SchemaFactory.createForClass(Degree);
