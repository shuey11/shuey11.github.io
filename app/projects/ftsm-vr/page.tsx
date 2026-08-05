import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function FtsmVrPage() {
  return <ProjectCaseStudy project={getProject("ftsm-vr")!} />;
}
