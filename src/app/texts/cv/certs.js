import * as React from 'react';
import ChevronDoubleDown from '@/resources/icons/chevronDoubleDown'
import ChevronDoubleLeft from '@/resources/icons/chevronDoubleLeft'

export default function Certs(){

    const [certsDisplay, setCertsDisplay] = React.useState("")

    const toggleCertsDisplay = (e) => {
        e.preventDefault();
        setCertsDisplay(prevCertsDisplay => prevCertsDisplay === "" ? " hidden" : "")
    }

    const displayChevronDoubleLeft = React.useCallback(() => {
        return certsDisplay == "" ? " hidden" : ""
    }, [certsDisplay])

    return (
        <div className={`flex flex-wrap border-2 rounded-md border-gray-400 mb-2`}>
            <div className={`pb-0.5 pl-1 w-11/12 mb-1`}>
                <span className={`text-xl pb-2`}>Certifications</span>
            </div>
            <div className={`pb-0.5 pl-1 w-1/12`}>
                <ChevronDoubleDown margins={`ml-auto mr-1 mt-1${certsDisplay}`} onClick={toggleCertsDisplay}/>
                <ChevronDoubleLeft margins={`ml-auto mr-1 mt-1${displayChevronDoubleLeft()}`} onClick={toggleCertsDisplay}/>
            </div>
            <div className={`pb-3 pl-1 w-full${certsDisplay}`}>
                <ul>
                    <li className="mb-1 lg:mb-0">AWS Certified Solutions Architect - Professional</li>
                    <li className="mb-1 lg:mb-0">Goethe Institute German Language Certificate - Level B1</li>
                    <li className="mb-1 lg:mb-0">Guidewire Software ACE Certification (v10/11 + GWCP up to Elysian)
                        <ul>
                            <li className="lg:inline ml-6">&#x2022; ClaimCenter</li>
                            <li className="lg:inline ml-6">&#x2022; PolicyCenter</li>
                            <li className="lg:inline ml-6">&#x2022; Integration</li>
                            <li className="lg:inline ml-6">&#x2022; Digital</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
