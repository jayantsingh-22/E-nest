import { FaStar, FaRegStar } from "react-icons/fa";
import "./fonts.css";

const StarRating = ({rating, size}: {rating: number | undefined, size: string}) => {
  return (
    <div className={`flex items-center font-bold gap-2 text-${size} my-4 mb-3`}>
      <span className="outfit">{rating ? rating.toFixed(1) : '0.0'}</span>
      <div className="flex">
        {
          Array(5).fill('').map((_, i) => (
            <span key={i}>
              {i < Math.ceil(rating ? rating : 0) ? (
                <FaStar className={`text-primary text-${size} mr-1`} />
              ) : (
                <FaRegStar className={`text-primary text-${size} mr-1`} />
              )}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default StarRating