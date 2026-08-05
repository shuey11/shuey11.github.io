import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function GoodOmensBookshopPage() {
  return <ProjectCaseStudy project={getProject("good-omens-bookshop")!} />;
}
