const gulp = require("gulp");
var ejs = require("gulp-ejs");
var rename = require("gulp-rename");


gulp.task( "default", function () {
    gulp.watch( "src/ejs/**/*.ejs", gulp.series( "ejs" ) ); // ejsディレクトリ以下の.ejsファイルの更新を監視
});


//EJS(テンプレートエンジン)
gulp.task("ejs", function(done) {
    gulp.src(
       ["src/ejs/**/*.ejs",'!' + "src/ejs/_*.ejs"] //参照するディレクトリと出力を除外するファイル
    )
    .pipe(ejs(
        // {rmWhitespace: true},//空白を削除
    ))
    .pipe(rename({extname: ".html"})) //拡張子をhtmlに
    .pipe(gulp.dest("dest/")); //出力先

    done();
});





