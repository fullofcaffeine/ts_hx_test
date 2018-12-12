import * as orga from 'orga';
import * as fs from 'fs';
import * as unified from 'unified';
import * as parse from 'orga-unified';
import * as markdown from 'remark-parse';
import * as util from 'util';
import * as $ from 'lodash';
//import Test from './haxe/haxeintegration/Test';

//POC e
// org -> markdown
// wordpress api ->

async function main() {
  const content = await util.promisify(fs.readFile)(
    '/home/fullofcaffeine/caffeine/org/focus.org'
  );
  const ast = orga.parse(content.toString());


  debugger;
}

main();
