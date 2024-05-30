/*
  Warnings:

  - The `message` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "message",
ADD COLUMN     "message" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
