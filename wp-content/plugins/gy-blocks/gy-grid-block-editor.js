const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

registerBlockType( 'gy-grid-block/grid-block', {
    title: 'Grid Block',
    category: 'layout',
    edit: ( props ) => {
        return (
            <div className={ props.className }>
                <InnerBlocks />
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
