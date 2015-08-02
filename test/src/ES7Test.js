import fs from 'fs-extra';
import assert from 'power-assert';

/**
 * @test {parser}
 * @test {patchBabylonAST}
 */
describe('ES7', ()=>{
  it('parse ES7 Decorators', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7Decorators'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7Decorators.js~ES7Decorators.html').toString();
    assert(html.includes('ES7Decorators'));
  });

  it('parse ES7 Exponentiation Operator', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7ExponentiationOperator'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7ExponentiationOperator.js~ES7ExponentiationOperator.html').toString();
    assert(html.includes('ES7ExponentiationOperator'));
  });

  it('parse ES7 Async Functions', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7AsyncFunctions'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7AsyncFunctions.js~ES7AsyncFunctions.html').toString();
    assert(html.includes('ES7AsyncFunctions'));
  });

  it('parse ES7 Export Extensions', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7ExportExtensions'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7ExportExtensions.js~ES7ExportExtensions.html').toString();
    assert(html.includes('ES7ExportExtensions'));
  });

  it('parse ES7 Object Rest Spread', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7ObjectRestSpread'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7ObjectRestSpread.js~ES7ObjectRestSpread.html').toString();
    assert(html.includes('ES7ObjectRestSpread'));
  });

  it('parse ES7 Trailing Function Commas', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7TrailingFunctionCommas'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7TrailingFunctionCommas.js~ES7TrailingFunctionCommas.html').toString();
    assert(html.includes('ES7TrailingFunctionCommas'));
  });

  it('parse ES7 Comprehensions', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7Comprehensions'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7Comprehensions.js~ES7Comprehensions.html').toString();
    assert(html.includes('ES7Comprehensions'));
  });

  it('parse ES7 Class Properties', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7ClassProperties'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7ClassProperties.js~ES7ClassProperties.html').toString();
    assert(html.includes('ES7ClassProperties'));
  });

  it('parse ES7 Function Bind', ()=>{
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('ES7FunctionBind'));

    const html = fs.readFileSync('./test/fixture/esdoc/class/src/ES7FunctionBind.js~ES7FunctionBind.html').toString();
    assert(html.includes('ES7FunctionBind'));
  });
});
