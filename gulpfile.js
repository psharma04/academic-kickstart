var gulp = require('gulp');
var gutil = require('gulp-util');
var exec = require('child_process').execSync;
var runSequence = require('run-sequence');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    /** This is the place where you could change / make the patterns on which files should be going into precache **/
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,eot,svg,ttf,woff,woff2,otf}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('hugo:build', function() {
	var result = exec("hugo", {encoding: 'utf-8'});
    gutil.log('hugo:build: \n' + result);
    return result;
});

gulp.task('hugo:builddrafts', function() {
  var result = exec("hugo --buildDrafts", {encoding: 'utf-8'});
    gutil.log('hugo:builddrafts: \n' + result);
    return result;
});

gulp.task('hugo:clean', function() {
	var result = exec("rm -rf public/", {encoding: 'utf-8'});
    gutil.log('hugo:clean: \n' + result);
    return result;
});

gulp.task('build', function(callback) {
  runSequence('hugo:clean',
              'hugo:build',
              'generate-service-worker',
              callback);
});

gulp.task('build:drafts', function(callback) {
  runSequence('hugo:clean',
              'hugo:builddrafts',
              'generate-service-worker',
              callback);
});

gulp.task('deploy:dev', function(callback) {
  runSequence('build:drafts',
              'deploy:dev:rsync',
              callback);
});

gulp.task('deploy:prod', function(callback) {
  runSequence('build',
              'deploy:firebase',
              callback);
});

gulp.task('deploy:dev:rsync', function() {
  /** Change the rsync task accordingly to your dev deploy **/
  /** I mainly used this as firebase doesn't allow restriction on static files and this server is .htaccess protected so the people that need can have a short look prior to prod deploy **/
  var result = exec("rsync -rv --update --delete public rac@your.ssh.server:/var/www/rac/dev.something/", {encoding: 'utf-8'});
    gutil.log('deploy:dev: \n' + result);
    return result;
});

gulp.task('deploy:firebase', function() {
  var result = exec("firebase deploy", {encoding: 'utf-8'});
    gutil.log('deploy:dev: \n' + result);
    return result;
});
