import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  degree: String,
  college: String,
  batch: String,
  field: String,
  course: String,
  liurl: String,
}, { timestamps: true });

const Contact = mongoose.model('Contactinfo', ContactSchema);
export default Contact;
