/*
  Warnings:

  - You are about to drop the column `date` on the `CreditNote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CreditNote" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
