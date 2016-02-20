'use strict';

import app from './app/config/express';
import router from './app/routes';

app.use(router);

app.listen(3000);
