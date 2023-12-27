import ChevronDoubleDown from '@/resources/icons/chevronDoubleDown'
import ChevronDoubleLeft from '@/resources/icons/chevronDoubleLeft'
import * as React from 'react'

export default function JobHistory(){

    const [jobHistoryDisplay, setJobHistoryDisplay] = React.useState(" hidden")

    const toggleJobHistoryDisplay = (e) => {
        e.preventDefault();
        setJobHistoryDisplay(prevJHDisplay => prevJHDisplay === "" ? " hidden" : "")
    }

    const displayChevronDoubleLeft = React.useCallback(() => {
        return jobHistoryDisplay == "" ? " hidden" : ""
    }, [jobHistoryDisplay])

    return (
        <div className={`flex flex-wrap border-2 rounded-md border-gray-400 mb-2`}>
            <div className={`pb-0.5 pl-1 w-11/12 mb-1`}>
                <span className={`text-xl pb-2`}>Employment History</span>
            </div>
            <div className={`pb-0.5 pl-1 w-1/12`}>
                <ChevronDoubleDown margins={`ml-auto mr-1 mt-1${jobHistoryDisplay}`} onClick={toggleJobHistoryDisplay}/>
                <ChevronDoubleLeft margins={`ml-auto mr-1 mt-1${displayChevronDoubleLeft()}`} onClick={toggleJobHistoryDisplay}/>
            </div>
            <div className={`pb-3 pl-1 w-full${jobHistoryDisplay}`}>
                <ul>
                    <li><span className="font-bold">Guidewire Software Inc.</span></li>
                    <li><span>Principal Architect, Cloud Program Delivery</span></li>
                    <li><span>January 2011 - May 2018 (USA)</span></li>
                    <li><span>June 2018 - March 2023 (Germany)</span></li>
                    <li><p>Roles/Responsibilities:  Configuration and integration consulting for ClaimCenter, PolicyCenter and Digital projects.  Direct collaboration
                        and consultation with customers to determine and bridge gaps between core product software and customer needs/requirements.</p>
                        <p>Performed cloud assurance assessments for new customers and those transitioning to Guidewire Cloud Platform (GWCP).  Used automated tools alongside manual
                             observations to track potential issues with customer applications running in GWCP and advised customers on methods and strategies to optimize usage of the cloud 
                             platform and facilitate swift, efficient and secure transition from on-premises to cloud.
                        </p>
                    </li>
                </ul>
                <ul>
                    <li><span className="font-bold">Jacada Inc.</span></li>
                    <li><span>Implementation Consultant</span></li>
                    <li><span>September 2008 - November 2010</span></li>
                    <li><p>Roles/Responsibilities:  Configuration and integration consulting for call center and CSR products.  Extensive hands-on custom development
                        with Java and Sencha/ExtJS technologies.  Provided lead technical guidance for custom configuration from core platform.
                    </p>
                    </li>
                </ul>
                <ul>
                    <li><span className="font-bold">Bottomline Technologies</span></li>
                    <li><span>Implementation Consultant</span></li>
                    <li><span>March 2006 - September 2008</span></li>
                    <li><p>Roles/Responsibilities:  Facilitated customer implementations of enterprise document processing software.  Designed business document templates
                         using UI design tools and proprietary programming language.  Also configured OCR software for customer to facilitate classification and data extraction
                         from scanned documents.
                    </p>
                    </li>
                </ul>               
            </div>
        </div>
    )

}
