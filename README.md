# TiptapExtensionVariable

A fresh Tiptap extension.

## Installation

```bash
npm install tiptap-extension-variable
```

### Links

[Issue](https://github.com/ueberdosis/tiptap/issues/819)
[Issue](https://github.com/ueberdosis/tiptap/issues/329)
[Repo](https://github.com/talqui-oss/tiptap-extension-variable)
[Sandbox](https://codesandbox.io/p/sandbox/tiptap-custom-extension-variable-node-0bnf72)
[Sandbox](https://codesandbox.io/p/sandbox/drag-and-drop-variables-n29954)

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
