import { InputRule, nodePasteRule } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import VariableComponent from './Component';
import VariableNode from './Node';

const values = {
  first_name: "First name",
  last_name: "Last name",
};

const inputRegex = /(?:^|\s)((?:{{ ?)((?:[\w]+))(?: ?}}))$/
const pasteRegex = /(?:^|\s)((?:{{ ?)((?:[\w]+))(?: ?}}))/g

const allowedVariables = Object.keys(values)

const ReactVariableNode = VariableNode.extend({
  addNodeView () {
    return ReactNodeViewRenderer(VariableComponent);
  },

  addInputRules () {
    return [
      new InputRule({
        find: inputRegex,
        handler: ({ state, range, match }) => {
          const keyword = match[2].trim().toLowerCase()
          if (allowedVariables.indexOf(keyword) > -1) {
            let addedPosition = 0
            if (match[0].substring(0, 1) === ' ') {
              addedPosition = 1
            }

            state.tr.replaceWith(
              range.from + addedPosition,
              range.to,
              this.type.create(
                {
                  name: match[2].trim(),
                }
              )
            )
          }
        }
      })
    ]
  },

  addPasteRules() {
    return [
      new nodePasteRule({
        find: pasteRegex,
        type: this.type
      })
    ];
  },
});

export default ReactVariableNode;
