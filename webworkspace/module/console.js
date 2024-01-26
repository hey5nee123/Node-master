const fs = require('fs');
const { Console } = require('console');

//require 쓸 때는  경로라는 걸 알려주기 위해서 ./ 사용.
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stdout.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const msg = 'Log Writing';

logger.log('Result:%s', msg);   //stdout.
logger.error(`Result:${msg}`); //stderr.