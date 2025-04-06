import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const saved = await contact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// ✅ GET - Fetch all users
router.get('/contact', async (req, res) => {
    try {
      const users = await Contact.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export default router;
