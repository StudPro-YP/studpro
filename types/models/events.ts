
import mongoose, { Document, Schema } from 'mongoose';

// Speaker Subdocument
const SpeakerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, trim: true },
    company: { type: String, required: true, trim: true },
  },
);

// Event Subdocument
const EventSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    date: { type: Date, required: true }, // Convert before inserting
    time: { type: String, required: true },
    venue: { type: String, required: true },
    topic: { type: String, default: '', trim: true },
    images: {
      type: [String],
      default: [],
    },
    speaker: {
      type: SpeakerSchema,
      required: true,
    },
  },
);

// Event Series Subdocument
const EventSeriesSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    events: {
      type: [EventSchema],
      required: true,
      default: [],
    },
  },
);

// StudProVersion Schema
export interface IStudPro extends Document {
  version: string;
  year: number;
  description?: string;
  eventSeries: {
    title: string;
    description?: string;
    events: {
      title: string;
      description?: string;
      date: Date;
      time: string;
      venue: string;
      topic?: string;
      images: string[];
      speaker: {
        name: string;
        title: string;
        company?: string;
      };
    }[];
  }[];
}

const StudProSchema: Schema = new Schema(
  {
    version: { type: String, required: true, unique: true, trim: true },
    year: { type: Number, required: true },
    description: { type: String, trim: true },
    eventSeries: {
      type: [EventSeriesSchema],
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent OverwriteModelError by checking if the model already exists
export const StudPro = mongoose.models.StudPro || mongoose.model<IStudPro>('StudPro', StudProSchema);
