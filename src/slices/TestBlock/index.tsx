import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestBlock`.
 */
export type TestBlockProps = SliceComponentProps<Content.TestBlockSlice>;

/**
 * Component for "TestBlock" Slices.
 */
const TestBlock = ({ slice }: TestBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_block (variation: {slice.variation}) Slices
    </section>
  );
};

export default TestBlock;
