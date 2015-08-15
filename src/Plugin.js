import _ from 'core-js';
import estraverse from 'estraverse';
import * as babylon from 'babylon';

/**
 * parse JavaScript(ES7) with babylon.
 * @param {string} code - target javascript.
 * @returns {AST} result AST.
 */
export function parser(code) {
  const options = {
    allowHashBang: true,
    sourceType: 'module',
    ecmaVersion: Infinity,
    features: {
      // stage 0
      'es7.comprehensions': true,
      'es7.classProperties': true,
      'es7.functionBind': true,

      // stage 1
      'es7.asyncFunctions': true,
      'es7.decorators': true,
      'es7.exportExtensions': true,
      'es7.objectRestSpread': true,
      'es7.trailingFunctionCommas': true,

      // stage 2
      'es7.exponentiationOperator': true
    },
    plugins: {
      jsx: true,
      flow: true
    }
  };

  const babylonAST = babylon.parse(code, options);
  const ast = babylonAST.program;
  patchBabylonAST(ast);
  return ast;
}

/**
 * path babylon ast to obtain Espree compatible.
 * - change ``innerComments`` to ``leadingComments``
 * - change ``CommentBlock`` to ``Block``
 * - change anonymous ``ClassExpression/FunctionExpression`` export to ``ClassDeclaration/FunctionDeclaration``.
 * - ignore unknown node type(``ClassProperty``, ``ExportDefaultSpecifier``, ``ExportNamespaceSpecifier`` and ``BindExpression``).
 * @param {AST} ast - target babylon AST.
 */
export function patchBabylonAST(ast) {
  function patch(node, parent) {
    // decorator
    if (node.decorators && node.decorators[0].leadingComments && !node.leadingComments) {
      node.leadingComments = [node.decorators[0].leadingComments[0]];
    }

    // for innerComments
    if (node.innerComments) {
      node.leadingComments = node.leadingComments || [];
      node.leadingComments.push(...node.innerComments);
    }

    // for leadingComments
    for (let comment of node.leadingComments || []) {
      if (comment.type === 'CommentBlock')  comment.type = 'Block';
    }

    // for trailingComments
    for (let comment of node.trailingComments || []) {
      if (comment.type === 'CommentBlock')  comment.type = 'Block';
    }

    // for anonymous class and function
    // babylon decide anonymous class to 'ClassExpression'.
    // but espree decide to 'ClassDeclaration'.
    // same function.
    const exportType = ['ExportDefaultDeclaration', 'ExportNamedDeclaration'];
    switch (node.type) {
      case 'ClassExpression':
        if (!node.id && exportType.includes(parent.type)) node.type = 'ClassDeclaration';
        break;
      case 'FunctionExpression':
        if (!node.id && exportType.includes(parent.type)) node.type = 'FunctionDeclaration';
        break;
    }

    // unknown node type
    const unknownNodeTypes = ['ClassProperty', 'ExportDefaultSpecifier', 'ExportNamespaceSpecifier', 'BindExpression'];
    if (unknownNodeTypes.includes(node.type)) {
      node.type = 'Identifier';
    }
  }

  const ESTRAVERSE_KEYS = {
    Super: [],
    JSXElement: [],
    ClassProperty: [], // todo
    ExportDefaultSpecifier: [], // todo
    ExportNamespaceSpecifier: [], // todo
    BindExpression: [] // todo
  };

  estraverse.traverse(ast, {
    enter: function(node, parent) {
      patch(node, parent);
    },

    keys: ESTRAVERSE_KEYS
  });
}

/**
 * change default parser to babylon parser.
 * @param {Object} ev - handler event.
 */
export function onHandleCodeParser(ev) {
  ev.data.parser = parser;
}
