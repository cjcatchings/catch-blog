import PersonalInfo from './personalInfo'
import Skills from './skills'
import Certs from './certs'
import JobHistory from './jobHistory'
import ProjectHistory from './projectHistory'

export default function CurriculumViate(){


    return(
        <>        
            <div className="pb-4 border-2 border-transparent">
                <span className="text-2xl font-bold">Curriculum Vitae</span>
            </div>
            <PersonalInfo />
            <Skills />
            <Certs />
            <JobHistory />
            <ProjectHistory />
        </>
    );

}
