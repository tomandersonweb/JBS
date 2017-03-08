/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp"),
    series = require('stream-series'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream,
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify");

var jsSource = "wwwroot/app/**/*.js",
    jsDestination = "wwwroot/dist";

gulp.task("bundle-scripts", function () {
    return gulp.src(jsSource)
        .pipe(concat("app.js"))
        .pipe(gulp.dest(jsDestination))
        .pipe(rename("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(jsDestination));
});

gulp.task('inject', function () {

    gulp.src('Views/Home/Index.cshtml')
      .pipe(inject(gulp.src(['wwwroot/dist/app.min.js'], { read: false })))
      .pipe(gulp.dest('./dist'));

    //gulp.src('~/Views/Home/Index.cshtml')
    //  .pipe(inject(gulp.src("wwwroot/dist/app.min.js", { read: false }), { relative: true }));
      //.pipe(gulp.dest("wwwroot/dist/app.min.js"));

    //gulp.src('/Views/Home/Index.cshtml')
    //    .pipe(wiredep({
    //        optional: 'configuration',
    //        goes: 'here',
    //        ignorePath: '..'
    //    }))
    //    .pipe(inject(jsDestination));
});

gulp.task('default', ['bundle-scripts', 'inject']);