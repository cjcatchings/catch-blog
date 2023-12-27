import * as React from 'react';
import ChevronDoubleDown from '@/resources/icons/chevronDoubleDown'
import ChevronDoubleLeft from '@/resources/icons/chevronDoubleLeft'

export default function ProjectHistory(){

    const [projHistoryDisplay, setProjHistoryDisplay] = React.useState(" hidden")

    const toggleJobHistoryDisplay = (e) => {
        e.preventDefault();
        setProjHistoryDisplay(prevPHDisplay => prevPHDisplay === "" ? " hidden" : "")
    }

    const displayChevronDoubleLeft = React.useCallback(() => {
        return projHistoryDisplay == "" ? " hidden" : ""
    }, [projHistoryDisplay])

    return (
        <div className={`flex flex-wrap border-2 rounded-md border-gray-400 mb-1`}>
            <div className={`pb-0.5 pl-1 w-11/12 mb-1`}>
                <span className={`text-xl pb-2`}>Project History</span>
            </div>
            <div className={`pb-0.5 pl-1 w-1/12`}>
                <ChevronDoubleDown margins={`ml-auto mr-1 mt-1${projHistoryDisplay}`} onClick={toggleJobHistoryDisplay}/>
                <ChevronDoubleLeft margins={`ml-auto mr-1 mt-1${displayChevronDoubleLeft()}`} onClick={toggleJobHistoryDisplay}/>
            </div>
            <div className={`pb-1 pl-1 relative w-full${projHistoryDisplay}`}>
                <ul className="flex flex-wrap">
                    <li className="w-full">I have led Guidewire projects across multiple products with the following customers:</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; VHV (Germany)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Aviva (Italy + UK)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; GuideOne Mutual (Iowa, USA)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Amica Mutual (Rhode Island, USA)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Hartford Fire & Casualty (Connecticut, USA)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Suncorp Ltd. (Australia)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; GEICO (Maryland, USA)</li>
                </ul>
                <ul className="flex flex-wrap">
                    <li className="w-full">I have also provided Guidewire Cloud Assurances for the following customers:</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; P&V (Belgium)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; MACIF (France)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Erie Insurance Group (Pennsylvania, USA)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; RedRiver (Canada)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Canal Insurance (South Carolina, USA)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Hollard (Australia)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Stellantis (Malta)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; FCCI (Florida)</li>
                    <li className="w-full lg:w-auto lg:inline ml-6">&#x2022; Cincinnati Insurance (Ohio)</li>
                </ul>
                <span className="h-8 inline-block"></span>
                <span>Feel free to reach out to me on LinkedIn for specific project details.</span>
            </div>
        </div>
    )
}
