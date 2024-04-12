import { InputRule } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import VariableComponent from './Component';
import VariableNode from './Node';

const values = {
  first_name: "First name",
  last_name: "Last name",
};

const variableInputRegex = /(?:^|\s)((?:{{ ?)((?:[\w]+))(?: ?}}))$/
const variablePasteRegex = /(?:^|\s)((?:{{ ?)((?:[\w]+))(?: ?}}))/g

const allowedVariables = Object.keys(values)

const ReactVariableNode = VariableNode.extend({
  addNodeView () {
    return ReactNodeViewRenderer(VariableComponent);
  },

  addInputRules () {
    return [
      new InputRule({
        find: variableInputRegex,
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
});

export default ReactVariableNode;
