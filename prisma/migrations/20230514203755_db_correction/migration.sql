/*
  Warnings:

  - A unique constraint covering the columns `[owner_email]` on the table `inventory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner_email` to the `inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_id_fkey";

-- AlterTable
ALTER TABLE "inventory" ADD COLUMN     "owner_email" VARCHAR(200) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "inventory_owner_email_key" ON "inventory"("owner_email");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_owner_email_fkey" FOREIGN KEY ("owner_email") REFERENCES "user"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
