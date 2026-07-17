const mongoose = require('mongoose');
require('dotenv').config();
const Branding = require('./models/Branding');
const Page = require('./models/Page');

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const branding = await Branding.findOne().lean();
    console.log('Branding Object:', JSON.stringify(branding, null, 2));
    const navPages = await Page.find({ isPublished: true, showInNavigation: true }).sort({ navigationOrder: 1 }).lean();
    console.log('Nav Pages:', JSON.stringify(navPages, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

test();
