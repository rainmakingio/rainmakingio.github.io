// Gulp tasks for JKL Tachyons

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    css = require('css'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload,
    child = require('child_process'),
    postcss = require('gulp-postcss'),
    cssvariables = require('postcss-css-variables');
    atImport = require("postcss-import")


  gulp.task('jekyll', () => {
    const jekyll = child.spawn('jekyll', ['serve',
      '--watch',
      '--incremental',
      '--drafts'
    ]);

    const jekyllLogger = (buffer) => {
      buffer.toString()
        .split(/\n/)
        .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
  });

gulp.task('css', function() {
  var processors = [
      atImport(),
      cssvariables()
  ];
  gulp.src('./css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./_site/css/'));
});

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./_site/"
        }
    });
});

// Function to call for reloading browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*
   DEFAULT TASK

 • Process sass then auto-prefixes and lints outputted css
 • Starts a server on port 3000
 • Reloads browsers when you change html or sass files

*/
gulp.task('default', ['css', 'jekyll', 'bs-reload', 'browser-sync'], function(){
  gulp.start(['css', 'bs-reload']);
  gulp.watch('css/**/*', ['css', 'bs-reload']);
  gulp.watch(['*.html', './**/*.html'], ['bs-reload']);
});
