/*
  Warnings:

  - You are about to drop the `catsub` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cat_id` to the `subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "catsub" DROP CONSTRAINT "catsub_cat_id_fkey";

-- DropForeignKey
ALTER TABLE "catsub" DROP CONSTRAINT "catsub_sub_id_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_id_fkey";

-- DropForeignKey
ALTER TABLE "subcategory" DROP CONSTRAINT "subcategory_id_fkey";

-- AlterTable
ALTER TABLE "subcategory" ADD COLUMN     "cat_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "catsub";

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_id_fkey" FOREIGN KEY ("id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
