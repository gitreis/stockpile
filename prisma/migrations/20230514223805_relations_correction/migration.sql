/*
  Warnings:

  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `inventory` table. All the data in the column will be lost.
  - You are about to drop the column `owner_email` on the `inventory` table. All the data in the column will be lost.
  - The `product_list` column on the `inventory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[user_email]` on the table `inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_owner_email_fkey";

-- DropIndex
DROP INDEX "inventory_owner_email_key";

-- AlterTable
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_pkey",
DROP COLUMN "id",
DROP COLUMN "owner_email",
ADD COLUMN     "user_email" VARCHAR(200) NOT NULL,
DROP COLUMN "product_list",
ADD COLUMN     "product_list" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "inventory_user_email_key" ON "inventory"("user_email");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
