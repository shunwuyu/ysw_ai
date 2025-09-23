const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: '章三',
    role: 'admin'
  })
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})