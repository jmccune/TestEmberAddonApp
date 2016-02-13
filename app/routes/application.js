import Ember from 'ember';
import EmberLog4jsLogger from 'ember-log4js/log4js-basic';
import FooObject from 'tap/core/errors';

var logger = EmberLog4jsLogger.getLogger('test-addon-app.initialization');

function appInit() {
  console.log("Tap Initialization Starting...");
  logger.warn("THIS IS A TEST MESSAGE ONLY!");
  setTimeout(function() {
    console.dir(FooObject);
    //throw new DxrefError('application', 'appInit', 'this is a test messagae that regnerates every 5 seconds');

  }, 5000);
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
