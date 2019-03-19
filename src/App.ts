/**
 * Created with JetBrains PhpStorm.
 * User: uweweber
 * Date: 06.10.17
 * Time: 14:16
 * To change this template use File | Settings | File Templates.
 */
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import * as router from './routes/index';

// Creates and configures an ExpressJS web server.
class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  public testMethod(): void {
    console.log('testMethod ........');
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    //let router = express.Router();

    this.express.use('/', router);

  }


}

export = App;


