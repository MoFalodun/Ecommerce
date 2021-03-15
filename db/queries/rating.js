module.exports = {
    createRatingsTable: `CREATE table IF NOT EXISTS ratings (
            id UUID PRIMARY KEY,
            rating NUMERIC NOT NULL,
            user_id uuid REFERENCES user_info NOT NULL,
            product_id uuid REFERENCES products NOT NULL,
            created_at TIMESTAMPTZ default now(),
            updated_at TIMESTAMPTZ default now()
        );`,
  
    insertRating: `INSERT INTO ratings
            ( id, rating, user_id, product_id )
        VALUES ($1, $2, $3, $4)
        RETURNING *;`,
  
    fetchRatingsByProductId: "SELECT * FROM ratings WHERE product_id = $1",
  
    fetchProducts: "SELECT * FROM products",
  
    updateProductById: `UPDATE products
      SET 
        description = $1,
        price = $2,
        size = $3,
        color = $4,
        updated_at = NOW()
      WHERE id = $5
      RETURNING *;`,
  };
  