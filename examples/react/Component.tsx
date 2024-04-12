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

  const contentEditable: boolean = false;
  const startCharacter: string = "{{";
  const endCharacter: string = "}}";

  const display = () => {
    return [startCharacter, name, endCharacter].join("")
  }

  return (
    <NodeViewWrapper>
      <div contentEditable={contentEditable}>
        {display()}
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
