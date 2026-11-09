import {
  blockColors,
  type ArrowColor,
  type Block,
  type BlockType,
} from "./index"

const noArrow: BlockType[] = ["hero", "facts"]

type WithArrow<T> = T extends unknown
  ? Omit<T, "arrow"> & { arrow?: ArrowColor }
  : never

export type PageBlock = WithArrow<Block>

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

export function resolveBlocks(blocks: Block[]): PageBlock[] {
  return blocks.map((block, index) => {
    const { arrow, ...fields } = block

    return { ...fields, arrow: arrowOf(block, blocks[index - 1], arrow) }
  })
}
