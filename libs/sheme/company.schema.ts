import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { PeriodSubDoc } from "./profile.schema";

export type CompanieDocument = HydratedDocument<Companie>;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Companie extends Document {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  logo: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: [String] })
  names: string[];

  @Prop({ type: [SchemaFactory.createForClass(PeriodSubDoc)] })
  employees: PeriodSubDoc;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Companie);
