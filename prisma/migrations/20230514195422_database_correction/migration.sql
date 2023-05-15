/*
  Warnings:

  - You are about to drop the column `owner_id` on the `inventory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "inventory" DROP CONSTRAINT "inventory_owner_id_fkey";

-- AlterTable
ALTER TABLE "inventory" DROP COLUMN "owner_id";

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_id_fkey" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
