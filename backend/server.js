const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const LEADS_FILE = path.join(__dirname, 'leads.json');

app.use(cors());
app.use(express.json());

// Ensure leads.json exists
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// Contact form API route
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || name.trim() === '') {
    return res.status(400).json({ success: false, error: 'Name is required' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'A valid email is required' });
  }
  if (!phone || phone.trim() === '') {
    return res.status(400).json({ success: false, error: 'Phone number is required' });
  }
  if (!message || message.trim() === '') {
    return res.status(400).json({ success: false, error: 'Message is required' });
  }

  const newLead = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    const fileContent = fs.readFileSync(LEADS_FILE, 'utf8');
    const leads = JSON.parse(fileContent);
    leads.push(newLead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

    console.log(`[Lead Saved]: ${newLead.name} (${newLead.email})`);
    
    return res.status(201).json({
      success: true,
      message: 'Заявка успешно отправлена! Александр Невский свяжется с вами в ближайшее время.'
    });
  } catch (error) {
    console.error('Error writing lead file:', error);
    return res.status(500).json({ success: false, error: 'Internal server error saving lead data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
