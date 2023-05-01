/*
  Warnings:

  - You are about to drop the column `product_id` on the `catsub` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "catsub" DROP CONSTRAINT "catsub_product_id_fkey";

-- AlterTable
ALTER TABLE "catsub" DROP COLUMN "product_id";

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_id_fkey" FOREIGN KEY ("id") REFERENCES "catsub"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_id_fkey" FOREIGN KEY ("id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
