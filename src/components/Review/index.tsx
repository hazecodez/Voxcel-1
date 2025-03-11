import React, { useState, useEffect } from "react";
import { Review } from "./types";
import ReviewContent from "../../content/ReviewContent.json";
import {
  ContentSection,
  Title,
  ReviewText,
  ReviewAuthor,
  DotsContainer,
  Dot,
} from "./styles";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const reviews: Review[] = ReviewContent;

  // Auto move carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Manual navigation
  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ContentSection id="testimonials">
      <Title>What Our Customers Say</Title>

      {reviews.length > 0 && (
        <>
          <ReviewText>
            <span style={{ fontSize: "30px" }}>❝</span>{" "}
            {reviews[currentIndex].text}{" "}
            <span style={{ fontSize: "30px" }}>❞</span>
          </ReviewText>
          <ReviewAuthor>— {reviews[currentIndex].author}</ReviewAuthor>
        </>
      )}

      <DotsContainer>
        {reviews.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToReview(index)}
          />
        ))}
      </DotsContainer>
    </ContentSection>
  );
};

export default ReviewCarousel;
