import { useState } from "react";
import CourseOfferingCard from "../utils/CourseOfferingCard";
import BookingForm from "../BookingForm";

const CourseOffering = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleFormClose = () => {
    setShowBookingForm(false);
  };

  return (
    <section className="w-[90%] flex flex-col items-center gap-6">
      <div className="flex gap-6 justify-center">
        <CourseOfferingCard cardClassName="bg-bookCard1" title="Agriculture" onBookNowClick={handleBookNowClick} />
        <CourseOfferingCard cardClassName="bg-bookCard2" title="Career Mentorship" onBookNowClick={handleBookNowClick} />
        <CourseOfferingCard cardClassName="bg-bookCard3" title="Research" onBookNowClick={handleBookNowClick} />
      </div>
      {showBookingForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BookingForm onClose={handleFormClose} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseOffering;