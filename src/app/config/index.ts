import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  database_url: process.env.DATABASE_URL,
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  },
  
  emailSender: {
    email: process.env.EMAIL,
    app_password: process.env.APP_PASSWORD,
  },
  cloudinary: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
  },
};
