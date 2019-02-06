
const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/ng-element-angular/runtime.js',
        './dist/ng-element-angular/polyfills.js',
        './dist/ng-element-angular/main.js',
        './dist/ng-element-angular/styles.css'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ng-greet-element.js')
    console.info('Angular Elements created successfully!')

})()
