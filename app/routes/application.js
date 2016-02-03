import Ember from 'ember';
import EmberLog4jsLogger from 'ember-log4js/log4js-basic';

var logger = EmberLog4jsLogger.getLogger('test-addon-app.initialization');

function appInit() {
  console.log("Tap Initialization Starting...");
  logger.warn("THIS IS A TEST MESSAGE ONLY!");
  console.log("Tap Initialization COMPLETE!");
}


appInit();

export default Ember.Route.extend({
  model: function() {
    return {
       mylist: ['noinfo','uninitialized']
    };
  }
});
