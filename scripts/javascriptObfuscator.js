const JavaScriptObfuscator = require('javascript-obfuscator')
const fs = require('fs')
const path = require('path')

const pwd = path.resolve('dist/assets/index.js')

fs.readFile(`${pwd}`, { encoding: 'utf8' }, (err, content) => {
    if (err) console.log(err.toString())
    else {
        let contentObed = JavaScriptObfuscator.obfuscate(content.toString(), {
            controlFlowFlatteningThreshold: 1,
            simplify: true,
            stringArrayShuffle: true,
            stringArrayThreshold: 1,
            deadCodeInjection: true,
            log: true,
            compact: true,
            controlFlowFlattening: false,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: true,
            splitStrings: false,
            stringArray: true,
            stringArrayCallsTransform: false,
            stringArrayEncoding: [],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayWrappersCount: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 2,
            stringArrayWrappersType: 'variable',
            unicodeEscapeSequence: false,
        })
        fs.writeFileSync(
            path.resolve('dist', 'assets', 'index.js'),
            contentObed.toString()
        )
    }
})

