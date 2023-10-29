import { Sequelize } from "sequelize";

const db = new Sequelize("prestamos", "root", "", {
  host: "server-production-0129.up.railway.app",
  dialect: "mysql",
  port: 3307,
   define: {
    timestamps: false,
  },
});

export default db;
