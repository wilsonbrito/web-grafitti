var gulp = require('gulp');

gulp.task('styl', function(){
    gulp.watch('stylus -w css/main.styl -o css/main.css', ['styl'])
    //gulp.watch('browser-sync start --server --files "css/*.css, src/*.html"', ['site'])
})

gulp.task('site', function(){
    //gulp.watch('stylus -w css/main.styl -o css/main.css', ['styl'])
    gulp.watch('browser-sync start --server --files "css/*.css, src/*.html"', ['site'])
})
