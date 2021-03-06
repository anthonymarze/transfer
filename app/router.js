import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('root', { path: '/' });
  this.route('ecological-service'), { path: '/ecological-service' };
  this.route('ceo-profile'), { path: '/ceo-profile' };
  this.route('projects');
});
