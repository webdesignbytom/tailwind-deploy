/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `NewsletterMember` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "NewsletterMember" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "username" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterMember_userId_key" ON "NewsletterMember"("userId");

-- AddForeignKey
ALTER TABLE "NewsletterMember" ADD CONSTRAINT "NewsletterMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
