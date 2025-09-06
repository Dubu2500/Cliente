// gulpfile.js
const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

const tsProject = ts.createProject("tsconfig.json");

const paths = {
  html: "src/**/*.html",
  json: "src/**/*.json",
  images: "src/assets/**/*",
  scssEntry: "src/style.scss",
  ts: "src/**/*.ts",
  dist: "dist"
};

function clean() { return del([paths.dist]); }

function styles() {
  return src(paths.scssEntry, { sourcemaps: true })
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(dest(paths.dist, { sourcemaps: "." }));
}

function scripts() {
  return src(paths.ts, { sourcemaps: true })
    .pipe(tsProject())
    .pipe(dest(paths.dist, { sourcemaps: "." }));
}

function html()   { return src(paths.html).pipe(dest(paths.dist)); }
function json()   { return src(paths.json).pipe(dest(paths.dist)); }
function images() { return src(paths.images, { allowEmpty: true }).pipe(dest(`${paths.dist}/assets`)); }

function dev() {
  watch("src/**/*.scss", styles);
  watch(paths.ts, scripts);
  watch(paths.html, html);
  watch(paths.json, json);
  watch(paths.images, images);
}

exports.build = series(clean, parallel(styles, scripts, html, json, images));
exports.dev   = series(exports.build, dev);
