/**
 * The GridRuler component is meant to be used as a developer tool to ensure items are lined up correctly on a 12 column grid. For this reason, refs are not forwarded to this component.
 */
export interface Props {
    /**
     * How much spacing there should be between columns.
     */
    spacing?: 'none' | 'sm' | 'md' | 'lg';
}
declare const GridRuler: {
    ({ spacing }: Props): JSX.Element;
    displayName: string;
};
export default GridRuler;
