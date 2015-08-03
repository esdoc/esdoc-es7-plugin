import fs from 'fs-extra';
import assert from 'power-assert';

/**
 * @test {parser}
 * @test {patchBabylonAST}
 */
describe('Babylon', ()=> {
  it('converts Babylon AST to Espree AST', ()=> {
    const indexHTML = fs.readFileSync('./test/fixture/esdoc/index.html').toString();
    assert(indexHTML.includes('>BabylonAnonymous<'));
    assert(indexHTML.includes('>BabylonAnonymous1<'));
    assert(indexHTML.includes('>BabylonInnerComments<'));
  });
});
