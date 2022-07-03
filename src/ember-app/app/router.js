import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dlya-primera-пользователь-l');
  this.route('i-i-s-dlya-primera-пользователь-e',
  { path: 'i-i-s-dlya-primera-пользователь-e/:id' });
  this.route('i-i-s-dlya-primera-пользователь-e.new',
  { path: 'i-i-s-dlya-primera-пользователь-e/new' });
  this.route('i-i-s-dlya-primera-рабочее-место-l');
  this.route('i-i-s-dlya-primera-рабочее-место-e',
  { path: 'i-i-s-dlya-primera-рабочее-место-e/:id' });
  this.route('i-i-s-dlya-primera-рабочее-место-e.new',
  { path: 'i-i-s-dlya-primera-рабочее-место-e/new' });
  this.route('i-i-s-dlya-primera-тип-l');
  this.route('i-i-s-dlya-primera-тип-e',
  { path: 'i-i-s-dlya-primera-тип-e/:id' });
  this.route('i-i-s-dlya-primera-тип-e.new',
  { path: 'i-i-s-dlya-primera-тип-e/new' });
});

export default Router;
