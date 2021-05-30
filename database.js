const mongoose = require('mongoose');
const URI =
  'mongodb+srv://salaoUser:Cl@663315@clusterdev.yhxlj.mongodb.net/salao-na-mao?retryWrites=true&w=majority';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
  .connect(URI)
  .then(() => console.log('DB is up!'))
  .catch(() => console.log(err));
