const Grids = ({gridColumns,display,flexDirection,justify,children,margin,containerType,row}) => {
    return (
        <div className={`${gridColumns} ${row} ${display} ${flexDirection} ${justify} ${margin} ${containerType}`}>
            {children}
        </div>
    );
}

export default Grids;