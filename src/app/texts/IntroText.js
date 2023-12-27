import Image from 'next/image'
import Link from 'next/link'
import underConstruction from '@/resources/icons/underConstruction.svg'

export default function IntroText() {

    return (
        <span className="w-full text-center">
            <p className="text-left">I have worked in software since graduating college, mostly as a consultant.  Most of my career has been spent in
                a professional services role for a company that builds software for
                the property and casualty insurance industry.  The company now hosts its
                solutions in the cloud.  Their strategy to cloud migration involved transitioning many current customers using
                their applications on-premises to their cloud platform.  </p>
            <br></br>
            <p className="text-left">A few years ago, I started in a role that involved facilitating customers into my company’s cloud platform.  This
                role involved reviewing customer implementations both manually and with automated tooling to ensure that our customers
                adhered to the best practices and standards required to deploy into the company’s cloud platform.  It also involved a degree of
                gatekeeping and telling customers that they must do things a certain way if they want to utilize the platform.  </p>
            <br></br>
            <p className="text-left">Over time I decided that I wanted to be more involved in providing meaningful guidance into helping customers transition to the
                cloud and less in telling customers what they can or cannot do if they want to utilize cloud capabilities.  I took it upon
                myself to begin studying the cloud:  the underlying architecture, how applications run on cloud infrastructure, the various services
                and capabilities available.  <Link href="https://aws.amazon.com/">Amazon Web Services (AWS)</Link> is a leading global cloud platform and service provider and I wanted to explore
                what they offer.  My previous role gave me some superficial exposure to AWS but I wanted to see more.  I wanted to become more than
                merely competent enough to navigate the AWS landscape but become a true expert in what individuals and organizations can do in the
                cloud and specifically AWS.  This was an opportunity to obtain substantial expertise in one of the leading providers of web
                applications and global IT infrastructure.</p>
            <br></br>
            <p className="text-left">I stepped away from my role with the company to begin expanding my knowledge of AWS.  Take a look at this link to see the resources and
                techniques I used to build upon my knowledge of solutions architecture with AWS and eventually obtain the 
                <Link href="https://aws.amazon.com/certification/certified-solutions-architect-professional/">
                    <span className="font-bold text-orange-900 dark:text-orange-500">
                        &nbsp;AWS Certified SolutionsArchitect – Professional certification.
                    </span>
                </Link></p>
            <br></br>
            <p className="text-left">You can also take a look here to view my <a href="#">“Curriculum Vitae”</a> 
            (<Image
                src={underConstruction}
                alt="under construction..."
                width={24}
                height={24}
                className="inline"
            />) 
            – my employment and project history as well as what I am planning to work on next.
            </p>

        </span>
    )
}
