import { Router } from 'express';

import { validateToken } from '../middlewares/validateToken.js';
import * as wifiController from './../controllers/wifiController.js';
import { wifiSchema } from './../schemas/wifiSchema.js';
import { validateSchema } from './../middlewares/validateSchemaMiddleware.js';

const wifiRouter = Router();

wifiRouter.post('/wifis', validateToken, validateSchema(wifiSchema), wifiController.createWifi);
wifiRouter.get('/wifis', validateToken, wifiController.getAllWifis);
wifiRouter.get('/wifis/:id', validateToken, wifiController.getWifiById);
wifiRouter.delete('/wifis/:id', validateToken, wifiController.deleteWifiById);

export default wifiRouter;
