module.exports = {
  createRatingsTable: `CREATE table IF NOT EXISTS ratings (
    id UUID PRIMARY KEY,
    rating NUMERIC NOT NULL,
    user_id uuid REFERENCES user_info NOT NULL,
    product_id uuid REFERENCES products NOT NULL,
    created_at TIMESTAMPTZ default now(),
    updated_at TIMESTAMPTZ default now()
);`,

  insertRatings: `INSERT INTO ratings
            ( id, rating , user_id, product_id )
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,

  fetchUserRatings: "SELECT * FROM ratings WHERE user_id = $1 AND product_id = $2",

  fetchRatingsByProduct: "SELECT * FROM ratings WHERE product_id = $1",
  
  fetchRatings: "SELECT * FROM ratings",

  fetchAvgRating: "SELECT AVG(rating)FROM ratings WHERE product_id = $1",

  updateRatings: `UPDATE rating
      SET 
        rating = $1,
        updated_at = NOW(),
      WHERE id = $2
      RETURNING *;`,
};
