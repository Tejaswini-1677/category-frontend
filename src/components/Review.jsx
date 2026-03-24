import { useEffect, useState } from "react";
import { addReview, getReviewsByProduct } from "../services/reviewService";

export default function Review({ productId = 1 }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    rating: 5,
    reviewText: ""
  });

  const load = () => {
    getReviewsByProduct(productId)
      .then(res => setReviews(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const submit = () => {
    addReview({
      productId,
      customerId: 1,
      rating: form.rating,
      reviewText: form.reviewText
    }).then(() => {
      alert("Review Added (Pending Approval)");
      load();
    });
  };

  return (
    <div>
      <h2>Reviews</h2>

      <input
        placeholder="Rating (1-5)"
        onChange={e => setForm({...form, rating: e.target.value})}
      />
      <input
        placeholder="Write review"
        onChange={e => setForm({...form, reviewText: e.target.value})}
      />

      <button onClick={submit}>Submit Review</button>

      <h3>Approved Reviews</h3>
      {reviews.map(r => (
        <div key={r.reviewId}>
          <p>Rating: {r.rating}</p>
          <p>{r.reviewText}</p>
        </div>
      ))}
    </div>
  );
}