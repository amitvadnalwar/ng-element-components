
const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/create-address-ui-component/runtime.js',
        './dist/create-address-ui-component/polyfills.js',
        './dist/create-address-ui-component/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ng-greet-element.js')
    console.info('Angular Elements created successfully!')

})()
