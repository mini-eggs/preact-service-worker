const gulp = require('gulp')

let files = ['./manifest.json']

let moveFunc = props => gulp
	.src(props.files, { base: props.location })
	.pipe(gulp.dest(props.destination))

let moveDefaults = {
	files: files,
	location: './',
	destination: 'build'
}

let moveData = ['move', null, () => { moveFunc(moveDefaults) }]

gulp.task(...moveData)