
export default function MobileTab(props){
    const {tabId, title, selected, onTabClick, ...otherProps} = props

    const tabColor = selected ? 'bg-blue-400' : 'bg-amber-600'
    const tabClass = `${tabColor} h-8 pt-1 w-full last:rounded-b-xl first:rounded-t-xl`

    return (
        <li className={tabClass} onClick={(e) => onTabClick(e, tabId)}>
            <span className="px-5 w-full">{title}</span>
        </li>
    );
}
