import Link from 'next/link'

export default function PersonalInfo() {
    return (
        <div className="flex flex-wrap border-2 rounded-md mb-2 border-gray-400">
            <div className="pb-0.5 pl-1 w-full">
                <span className="text-xl pb-2 w-full">Personal Information</span>
            </div>
            <div className="pb-0.5 pl-1 w-full lg:w-6/12">
                <ul>
                    <li>
                        <span className="font-bold">Name: </span>
                        <span>Chris Catchings</span>
                    </li>
                    <li>
                        <span className="font-bold">Location: </span>
                        <span>Munich, Germany</span>
                    </li>
                    <li>
                        {/* TODO  add logo */}
                        <span className="font-bold text-cyan-800">
                            <Link href="https://www.linkedin.com/in/cjc626/">My LinkedIn Profile</Link>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="pb-0.5 pl-1 w-full lg:w-6/12">
                <ul>
                    <li>
                        <span className="font-bold">Education</span>
                    </li>
                    <li>
                        <span>Bachelor&apos;s of Science - Computer Engineering</span>
                    </li>
                    <li>
                        <span>University of Florida, Gainesville</span>
                    </li>
                    <li>
                        <span>December 2005</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
