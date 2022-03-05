-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT true;
