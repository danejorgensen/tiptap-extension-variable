import { Editor, Node } from '@tiptap/core'
import { NodeViewWrapper } from '@tiptap/react'

interface Props {
  deleteNode?: any;
  editor: Editor;
  node: Node<string, any>;
  selected?: boolean;
}

const Component = (props: Props) => {
  const {
    deleteNode,
    editor,
    node: {
      attrs: {
        name
      }
    },
    selected,
  } = props;

  const as: string = "span";
  const contentEditable: boolean = false;
  const startCharacter: string = "{{";
  const endCharacter: string = "}}";

  const display = () => {
    return [startCharacter, name, endCharacter].join("")
  }

  return (
    <NodeViewWrapper as={as}>
      <span contentEditable={contentEditable}>
        {display()}
      </span>
    </NodeViewWrapper>
  );
};

export default Component;
