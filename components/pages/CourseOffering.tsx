import CourseOfferingCard from "../utils/CourseOfferingCard"

const CourseOffering = () => {
  return (
    <section className="w-[90%] flex gap-6 justify-center">
        <CourseOfferingCard cardClassName="bg-bookCard1" title="Agriculture" />
        <CourseOfferingCard cardClassName="bg-bookCard2" title="Career Mentorship" />
        <CourseOfferingCard cardClassName="bg-bookCard3" title="Research" />
    </section>
  )
}

export default CourseOffering