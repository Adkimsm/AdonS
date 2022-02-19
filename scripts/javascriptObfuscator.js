const JavaScriptObfuscator = require('javascript-obfuscator')
const fs = require('fs')
const path = require('path')

const pwd = path.resolve('dist/assets/index.js')

fs.readFile(`${pwd}`, { encoding: 'utf8' }, (err, content) => {
    if (err) console.log(err.toString())
    else {
        let contentObed = JavaScriptObfuscator.obfuscate(content.toString(), {
            controlFlowFlattening: true,
            deadCodeInjection: true,
            log: true,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.9,
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersChainedCalls: true,
        })
        fs.writeFileSync(
            path.resolve('dist', 'assets', 'index.js'),
            contentObed.toString()
        )
    }
})

