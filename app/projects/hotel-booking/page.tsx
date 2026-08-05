import ProjectCaseStudy from "../ProjectCaseStudy";
import { getProject } from "../project-data";

export default function HotelBookingPage() {
  return <ProjectCaseStudy project={getProject("hotel-booking")!} />;
}
