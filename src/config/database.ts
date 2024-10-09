import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://guiro4na_user:CLllk02nKSJxkfbC46UEhJlvM65B0OOr@dpg-crh3ckg8fa8c738rlsu0-a.oregon-postgres.render.com/guiro4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;