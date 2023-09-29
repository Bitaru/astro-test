
/**
 * Props for `SidesBlock`.
 */

/**
 * Component for "SidesBlock" Slices.
 */
const SidesBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sides_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SidesBlock;
