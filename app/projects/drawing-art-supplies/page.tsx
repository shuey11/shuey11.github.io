import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function DrawingArtSuppliesPage() {
  return <ProjectCaseStudy project={getProject("drawing-art-supplies")!} />;
}
