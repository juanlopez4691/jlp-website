import {
  blockColors,
  type ArrowColor,
  type Block,
  type BlockCopy,
  type BlockType,
} from "./index"

const noArrow: BlockType[] = ["hero", "facts"]

type PageBlockOf<T extends Block> = {
  type: T["type"]
  id?: string
  arrow?: ArrowColor
  props: BlockCopy<T>
}

export type PageBlock = {
  [K in BlockType]: PageBlockOf<Extract<Block, { type: K }>>
}[BlockType]

/** Nothing when the arrow would vanish into the block, or the block never takes one. */
function arrowOf(
  block: Block,
  previous: Block | undefined,
  flag: boolean | undefined
): ArrowColor | undefined {
  if (!previous || flag === false || noArrow.includes(block.type)) {
    return undefined
  }

  const color = blockColors[previous.type]

  return color === blockColors[block.type] ? undefined : color
}

export function resolveBlocks(blocks: Block[], file: string): PageBlock[] {
  const ids = blocks.flatMap((block) => (block.id ? [block.id] : []))

  // Two blocks with one id give the page two anchors to the same place.
  const duplicate = ids.find((id, index) => ids.indexOf(id) !== index)

  if (duplicate) {
    throw new Error(
      `${file}: the id "${duplicate}" is used by more than one block`
    )
  }

  return blocks.map((block, index) => {
    const { type, id, arrow, ...props } = block

    // The compiler cannot link `type` to the rest of the block; it holds
    // because `props` is the block minus its metadata.
    return {
      type,
      id,
      arrow: arrowOf(block, blocks[index - 1], arrow),
      props,
    } as PageBlock
  })
}
