import { CaseStudyLayout } from "../../components/case-study-layout";
import { projectBySlug } from "../../data/projects";
export default function Page() { return <CaseStudyLayout project={projectBySlug("fantasia")}/>; }
