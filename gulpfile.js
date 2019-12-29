const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("styles", () => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task("clean", () => {
  return del(["dist/css/prostyle.css"]);
});

gulp.task("default", gulp.series(["clean", "styles"]));


gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

