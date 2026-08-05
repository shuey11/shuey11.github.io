import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function TravelBoardBuilderPage() {
  return <ProjectCaseStudy project={getProject("travel-board-builder")!} />;
}
