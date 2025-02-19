/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_NTJx1mbHOv3i@ep-soft-sun-a8ib9bq6-pooler.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require',
    }
};