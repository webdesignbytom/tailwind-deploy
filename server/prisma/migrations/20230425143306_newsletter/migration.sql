-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "SocialMediaLink" DROP CONSTRAINT "SocialMediaLink_profileId_fkey";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "dob" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "agreedToNewsletter" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
