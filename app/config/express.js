'use strict';

import express     from 'express';
import swig        from 'swig';
import path        from 'path';
import consolidate from 'consolidate';


let app = express();

/*Configurar motor de plantillas*/
app.set('view engine','html');
app.set('views',  `${__dirname}/../views/`);
app.engine('.html',consolidate.swig);

/*Configurar archivos estaticos*/

app.use(express.static(path.join(__dirname, '/../../public')));



export default app;
