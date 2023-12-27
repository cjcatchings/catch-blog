import Image from 'next/image'
import SimpleHome from '@/resources/icons/simpleHome'
import awsLogo from '@/resources/logos/amazon-web-services-2.svg'
import pythonLogo from '@/resources/logos/python-5.svg'
import reactLogo from '@/resources/logos/react-2.svg'
import mongoDbLogo from '@/resources/logos/mongodb-ar21.svg'
import Link from 'next/link'

export default function MainHeader(){

    return (
        <header>
            <div className="flex flex-wrap items-center justify-between bg-green-300 dark:bg-green-500
            m-5 h-48 lg:h-36 rounded-2xl shadow-black shadow-md">
                <div className="w-1/12 h-24 lg:h-28"></div>
                <div className="relative w-10/12 h-24 lg:h-28 pt-2 text-center lg:overflow-scroll">
                    <Link href="https://www.mongodb.com" target="_blank">
                    <Image 
                        src={mongoDbLogo}
                        alt=""
                        width={128}
                        height={128}
                        className="m-auto pl-4 pr-2 py-2 inline"
                    /></Link>
                    <Link href="https://www.python.org/" target="_blank">
                    <Image 
                        src={pythonLogo}
                        alt=""
                        width={80}
                        height={80}
                        className="m-auto px-4 py-2 inline"
                    /></Link>
                    <Link href="https://aws.amazon.com/certification/certified-solutions-architect-professional/" target="_blank">
                        <Image 
                            src="/csap-emblem.png"
                            alt=""
                            width={80}
                            height={80}
                            className="m-auto px-4 py-2 inline"
                        />
                    </Link>
                    <Link href="https://aws.amazon.com" target="_blank">
                    <Image 
                        src={awsLogo}
                        alt=""
                        width={80}
                        height={80}
                        className="m-auto px-4 py-2 inline"
                    /></Link>
                    <Link href="https://react.dev/" target="_blank">
                    <Image 
                        src={reactLogo}
                        alt=""
                        width={80}
                        height={80}
                        className="m-auto px-4 py-2 inline"
                    /></Link>
                </div>
                <div className="w-1/12 h-24 lg:h-28">
                    <span className="lg:hidden"><SimpleHome className="bottom-0"/></span>
                </div>
                <div className="w-1/12"></div>
                <div className="relative w-10/12 h-8">
                    <span className="absolute bottom-0 lg:bottom-2 w-full text-center">
                        What I have been learning (WIP)
                    </span>
                </div>
                <div className="relative w-1/12 h-8">
                    <span className="hidden lg:inline"><SimpleHome className="absolute bottom-2 hidden"/></span>
                </div>
            </div>
        </header>
    )
}
