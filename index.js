/* jshint node: true */
'use strict';
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

console.log('disabling pods...')
// newer versions of ember-cli expose podTemplates more publically (less of a hack)
if (typeof EmberApp.prototype.podTemplates) {
  EmberApp.prototype.podTemplates = function() { return; }; // ignore podTemplates
  EmberApp.prototype._podTemplatePatterns = function() { return []; }; // no pods, no things to filter out
} else {
  EmberApp.prototype._podTemplatePatterns = function() { return []; }; // no pods, no things to filter out
  EmberApp.prototype.podTemplates = function() { return; }; // ignore podTemplates
  EmberApp.prototype._templatesTree = function() {
    if (this._cachedTemplateTree) {
      return this._cachedTemplateTree;
    }

    var trees = [];
    if (this.trees.templates) {
      var standardTemplates = new Funnel(this.trees.templates, {
        srcDir: '/',
        destDir: this.name + '/templates',
        annotation: 'Funnel: Templates'
      });

      trees.push(standardTemplates);
    }

    // no podTemplates, lets not incure the penalty
    if (this.trees.app) {
      trees.push(new Funnel(this.trees.app, {
        include: this._podTemplatePatterns(),
        exclude: [ 'templates/**/*' ],
        destDir: this.name + '/',
        annotation: 'Funnel: Pod Templates'
      }));
    }

    this._cachedTemplateTree = mergeTrees(trees, {
      annotation: 'TreeMerge (templates)'
    });

    return this._cachedTemplateTree;
  };
}

module.exports = {
  name: 'ember-cli-no-pods'
};
