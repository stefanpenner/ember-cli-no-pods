# Ember-cli-no-pods

As implemented today pods causes extra IO that can cause build related performance issues.
This addon removes that functionality, restoring some of the build performance.

With the modules RFC, we expect to revisit all of this fun. Interim hacks FTW

## usage

```
ember install ember-cli-no-pods
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-no-pods`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
