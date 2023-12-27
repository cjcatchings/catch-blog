import DefaultTab from './defaultTab'
import MobileTab from './mobileTab'

export default function DefaultTabSet(props){

    const {tabs, onTabClick, ...otherProps} = props;

    return (
        <>
            <div className="hidden lg:flex items-start mx-10">
            {
                tabs.map(t => <DefaultTab 
                    key={t.tabId} 
                    tabId={t.tabId}
                    title={t.title} 
                    selected={t.selected}
                    onTabClick={onTabClick} />)
            }
            </div>
            <ul className="flex lg:hidden flex-col items-start py-2 px-2 mx-3">
            {
                tabs.map(t => <MobileTab 
                    key={t.tabId} 
                    tabId={t.tabId}
                    title={t.title} 
                    selected={t.selected}
                    onTabClick={onTabClick} />)
            }
            </ul>
        </>
    );

}
