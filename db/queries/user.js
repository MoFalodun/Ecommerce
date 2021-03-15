module.exports = {
  createUserTable: `CREATE TABLE IF NOT EXISTS user_info (
          id uuid PRIMARY KEY,
          email varchar unique not null,
          first_name varchar not null,
          last_name varchar not null,
          password varchar not null,
          user_name varchar(20) unique not null,
          created_at TIMESTAMPTZ default now(),
          updated_at TIMESTAMPTZ default now()
      );`,
  insertUser: `INSERT INTO user_info (
          id,
          email,
          first_name,
          last_name,
          password,
          user_name
          ) values ($1, $2, $3, $4, $5, $6)
          RETURNING id, email, first_name, last_name, user_name, created_at;`,

  fetchUserByUserName: "SELECT * FROM user_info WHERE user_name = $1",
  fetchUserByEmail: "SELECT * FROM user_info WHERE email = $1",
  fetchUserById: "SELECT * FROM user_info WHERE id = $1",
  updateUserById: `UPDATE user_info
  SET 
    email = $1,
    first_name = $2,
    last_name = $3,
    user_name = $4,
    updated_at = NOW()
  WHERE id = $5
  RETURNING *;`,
};
