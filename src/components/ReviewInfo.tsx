import FilledStarIcon from "../logos/FilledStarIcon";
import Paragraph from "./Paragraph";

type Props = {
  starCount: number;
  reviewer: string;
  review: string;
};

function ReviewInfo({ starCount, reviewer, review }: Props) {
  return (
    <div className="flex flex-col items-start gap-y-0.5 overflow-auto">
      <Paragraph>{reviewer}</Paragraph>
      <div className="flex">
        {Array.from({ length: starCount }, (_, i) => (
          <FilledStarIcon key={i} />
        ))}
      </div>
      <Paragraph>
        {review.length > 100 ? review.slice(0, 100) + "..." : review}
      </Paragraph>
    </div>
  );
}

export default ReviewInfo;
