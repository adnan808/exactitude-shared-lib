import { HydratedDocument, Document, Schema } from 'mongoose';

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  collection: 'scrapper_job'
};

export class ScrapperJob extends Document {
  created_at: Date;
  updated_at: Date;
}

export const ScrapperJobSchema = new Schema({
  created_at: Date,
  updated_at: Date,
}, options);

export type ScrapperJobDocument = HydratedDocument<ScrapperJob>;