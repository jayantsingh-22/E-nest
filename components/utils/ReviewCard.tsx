import { useEffect, useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";

import "./fonts.css";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-center gap-4">
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review, index) => (
          <div
            key={index}
            className="w-[22rem] flex flex-col p-4 bg-white shadow-light rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-3 mx-5 mt-4">
              <Image
                src="/assets/user2.png"
                alt="user"
                width={45}
                height={45}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-bookCardText outfit font-semibold text-xl">
                  {review.reviewerName}
                </h1>
                <div className="flex items-center text-sm gap-2 -mt-2">
                  <StarRating rating={review.rating} size={"sm"}/>  
                  <p className="text-xs text-gray-500">(4 Months ago)</p>
                </div>
              </div>
            </div>
            <p className="w-[16rem] flex flex-col text-sm font-normal outfit mx-5 mb-6 -mt-2">{review.reviewText}</p> 
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewCard;
