import { mergeAttributes, Node } from '@tiptap/core'

const Variable = Node.create({
  name: 'variable',
  group: 'inline',
  content: 'inline*',
  inline: true,
  selectable: false,
  atom: true,

  addAttributes () {
    return {
      name: {
        default: null,
        parseHTML: element => {
          return element.getAttribute('data-name')
        },
        renderHTML: attributes => {
          if (!attributes.name) {
            return {}
          }

          return {
            'data-name': attributes.name
          }
        }
      }
    };
  },

  addOptions () {
    return {
      endCharacter: "}}",
      renderLabel({ options, node }) {
        const { endCharacter, startCharacter } = options;
        const { name } = node.attrs;

        return [startCharacter, name, endCharacter].join("");
      },
      startCharacter: "{{",
    };
  },

  parseHTML () {
    return [{ tag: `span[data-type="${this.name}"]` }];
  },

  renderHTML ({ HTMLAttributes, node }) {
    const attributes = mergeAttributes({ 'data-type': this.name }, HTMLAttributes);

    return [
      'span',
      attributes,
      this.options.renderLabel({
        options: this.options,
        node
      })
    ];
  },
});

export default VariableNode;
