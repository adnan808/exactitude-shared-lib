import { HydratedDocument, Document, Schema } from 'mongoose';

export class ScrapperJob extends Document {
  created_at: Date;
}

const options = {
  timestamps: {
    createdAt: 'created_at',
  },
  collection: 'scrapper_job'
};

export const ScrapperJobSchema = new Schema({
  created_at: Date,
}, options);

export type ScrapperJobDocument = HydratedDocument<ScrapperJob>;