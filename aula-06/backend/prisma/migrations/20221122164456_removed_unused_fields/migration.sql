/*
  Warnings:

  - You are about to drop the column `expiration` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `network` on the `Asset` table. All the data in the column will be lost.
  - You are about to drop the column `qr_code` on the `Asset` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "expiration",
DROP COLUMN "image",
DROP COLUMN "network",
DROP COLUMN "qr_code";

-- DropEnum
DROP TYPE "Network";
