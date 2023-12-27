

export default function DefaultTab(props, children){

    const {tabId, title, selected, onTabClick, ...otherProps} = props
    const tabColor = selected ? 'bg-blue-400' : 'bg-amber-600'
    const tabClass = `${tabColor} h-8 pt-1 rounded-t-2xl shadow-black shadow-md cursor-pointer`

    return (
        <div className={tabClass} onClick={(e) => onTabClick(e, tabId)}>
            <span className="px-5">{title}</span>
        </div>
    );
}
