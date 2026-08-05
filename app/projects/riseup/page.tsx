import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function RiseUpPage() {
  return <ProjectCaseStudy project={getProject("riseup")!} />;
}
