const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const apiRoutes = require('./src/routes/api');
app.use('/api', apiRoutes);

const authRoutes = require('./src/routes/auth');
app.use('/auth', authRoutes);

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/financial-summary', require('./src/routes/financialSummary'));
app.use('/api/stock-trends', require('./src/routes/stockTrends'));
app.use('/api/budget', require('./src/routes/budget'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));