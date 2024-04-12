import { mergeAttributes, Node } from '@tiptap/core'

export interface VariableOptions {
  endCharacter: string;
  HTMLAttributes: Record<string, any>;
  startCharacter: string;
}

const Variable = Node.create<VariableOptions>({
  name: 'variable',
  group: 'inline',
  content: 'text*',
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
      renderHTML({ options, node }) {
        const { endCharacter, startCharacter } = options;
        const { name } = node.attrs;

        return [
          'span',
          mergeAttributes(this.HTMLAttributes, options.HTMLAttributes),
          0
        ]
      },
      renderText({ options, node }) {
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
    const mergedOptions = { ...this.options }
    mergedOptions.HTMLAttributes = mergeAttributes({ 'data-type': this.name }, this.options.HTMLAttributes, HTMLAttributes)

    return this.options.renderHTML({
      options: mergedOptions,
      node,
    })
  },

  renderText ({ HTMLAttributes, node }) {
    const mergedOptions = { ...this.options }
    mergedOptions.HTMLAttributes = mergeAttributes({ 'data-type': this.name }, this.options.HTMLAttributes, HTMLAttributes)

    return [
      'span',
      attributes,
      this.options.renderText({
        options: mergedOptions,
        node
      })
    ];
  },
});

export default VariableNode;
