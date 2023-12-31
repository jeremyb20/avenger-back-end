const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('DB Connected to ', mongoose.connection.name);
})
.catch(err => {
  console.log(err.message)
});

const port = process.env.PORT || 3000;
app.listen(port)

console.log('server listen port', port)
