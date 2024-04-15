# TiptapExtensionVariable

A fresh Tiptap extension.

## Installation

```bash
npm install tiptap-extension-variable
```

### Other Links

- [Issue](https://github.com/ueberdosis/tiptap/issues/819)
- [Issue](https://github.com/ueberdosis/tiptap/issues/329)
- [ExtensionRepo](https://github.com/talqui-oss/tiptap-extension-variable)
- [TipTap VariableNodeView Repo](https://github.com/haiml123/tip-tap-variable-node-view)
- [Nunjucks Sandbox](https://codesandbox.io/p/sandbox/tiptap-custom-extension-variable-node-0bnf72)
- [Sandbox](https://codesandbox.io/p/sandbox/drag-and-drop-variables-n29954)
- [Mention Extension](https://github.com/ueberdosis/tiptap/blob/main/packages/extension-mention/src/mention.ts)

### Rendering React Component as variable

```
import { ReactNodeViewRenderer } from '@tiptap/react';
import { Variable } from 'tiptap-extension-variable';
import Component from './Component';

const ReactVariable = Variable.extend({
  addNodeView () {
    return ReactNodeViewRenderer(Component);
  },
})
```
