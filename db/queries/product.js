module.exports = {
  createProductTable: `CREATE table IF NOT EXISTS products (
          id UUID PRIMARY KEY,
          title varchar(70) NOT NULL,
          description varchar(200) NOT NULL,
          price INT NOT NULL,
          size INT NOT NULL,
          color varchar(40) NOT NULL,
          user_id uuid REFERENCES user_info NOT NULL,
          user_name varchar NOT NULL,
          created_at TIMESTAMPTZ default now(),
          updated_at TIMESTAMPTZ default now()
      );`,

  insertProduct: `INSERT INTO products
          ( id, title, description, price, size, color, user_id, user_name )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;`,

  fetchProductById: "SELECT * FROM products WHERE id = $1",

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

  deleteProductByID: "DELETE FROM products WHERE id = $1"
};
