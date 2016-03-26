#!/usr/bin/env node
/**
 * @author       : 远峰
 * @description  : 自动监控文件变化脚本
 * @time         : 2016-03-26 11:20
 */

const fs = require('fs');
const path = require('path');
const less = require('less');

const lessConfig = {
    main: './less/main.less',
    test: /less$/,
    output: './css/'
}

fs.watch('./', {
    recursive: true
}, (e, filename) => {
    const mainFile = path.parse(lessConfig.main);
    if (lessConfig.test.test(filename)) {
        // 处理less文件
        fs.readFile(lessConfig.main, 'utf8', (err, content) => {
            if (err) {
                console.log(err);
                return;
            }
            less.render(content)
                .then(output => {
                    fs.writeFile(lessConfig.output + mainFile.name + '.css', output.css, err => {
                        if (err) {
                            return console.log(err);
                        }
                        console.log('build less success');
                    });
                }, err => {
                    console.log(err);
                });
        });
    }
});
