import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestBlock2`.
 */
export type TestBlock2Props = SliceComponentProps<Content.TestBlock2Slice>;

/**
 * Component for "TestBlock2" Slices.
 */
const TestBlock2 = ({ slice }: TestBlock2Props): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_block2 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestBlock2;
