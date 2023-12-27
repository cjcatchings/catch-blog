'use client'

import ChevronDoubleDown from '@/resources/icons/chevronDoubleDown'
import ChevronDoubleLeft from '@/resources/icons/chevronDoubleLeft'
import * as React from 'react'

export default function Skills() {
    
    const [ skillsDisplay, setSkillsDisplay ] = React.useState("");

    const toggleSkillsDisplay = (e) => {
        e.preventDefault();
        setSkillsDisplay(prevSkillsDisplay => prevSkillsDisplay === "" ? " hidden" : "")
    }

    const displayChevronDoubleLeft = React.useCallback(() => {
        return skillsDisplay == "" ? " hidden" : ""
    }, [skillsDisplay])

    return (
        <div className={`flex flex-wrap border-2 rounded-md border-gray-400 mb-2`}>
            <div className={`pb-0.5 pl-1 w-11/12`}>
                <span className={`text-xl pb-2`}>Technical Skills</span>
            </div>
            <div className={`pb-0.5 pl-1 w-1/12`}>
                <ChevronDoubleDown margins={`ml-auto mr-1 mt-1${skillsDisplay}`} onClick={toggleSkillsDisplay}/>
                <ChevronDoubleLeft margins={`ml-auto mr-1 mt-1${displayChevronDoubleLeft()}`} onClick={toggleSkillsDisplay}/>
            </div>
            <div className={`pb-3 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>Languages</span>
                    </li>
                    <li>
                        <span>Python, Java, Gosu</span>
                    </li>
                    <li>
                        <span>JavaScript, ReactJS, TailwindCSS</span>
                    </li>
                    <li>
                        <span>NodeJS, Terraform, boto3</span>
                    </li>
                </ul>
            </div>
            <div className={`pb-3 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>AWS Services</span>
                    </li>
                    <li>
                        <span>EC2, ECS, Fargate, Elastic Beanstalk</span>
                    </li>
                    <li>
                        <span>S3, Lambda, API Gateway, SQS, SNS</span>
                    </li>
                    <li>
                        <span>Amazon VPC, CloudFront, Route 53</span>
                    </li>
                    <li>
                        <span>And more AWS services...</span>
                    </li>
                </ul>
            </div>
            <div className={`pb-3 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>Data/Databases</span>
                    </li>
                    <li>
                        <span>MySQL, PostgreSQL, MS SQL</span>
                    </li>
                    <li>
                        <span>MongoDB, DynamoDB</span>
                    </li>
                    <li>
                        <span>Amazon Athena, AWS Glue</span>
                    </li>
                </ul>
            </div>
            <div className={`pb-3 lg:pb-0.5 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>Tools/Applications</span>
                    </li>
                    <li>
                        <span>Docker, Next.js, ngInx</span>
                    </li>
                    <li>
                        <span>Flask, Git, Apache Kafka</span>
                    </li>
                    <li>
                        <span>Numpy, Pandas, PyJWT</span>
                    </li>
                    <li>
                        <span>Spring Boot</span>
                    </li>
                </ul>
            </div>
            <div className={`pb-3 lg:pb-0.5 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>Guidewire Applications</span>
                    </li>
                    <li>
                        <span>ClaimCenter, PolicyCenter, GWCP</span>
                    </li>
                    <li>
                        <span>Guidewire Integration, Digital</span>
                    </li>
                </ul>
            </div>
            <div className={`pb-3 lg:pb-0.5 pl-1 w-full lg:w-4/12${skillsDisplay}`}>
                <ul>
                    <li>
                        <span className={`font-bold`}>Frameworks/Standards</span>
                    </li>
                    <li>
                        <span>OIDC/SAML</span>
                    </li>
                    <li>
                        <span>REST, Swagger, OpenAPI</span>
                    </li>
                    <li>
                        <span>CI/CD Pipelines</span>
                    </li>
                    <li>
                        <span>Cloud native application development</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
