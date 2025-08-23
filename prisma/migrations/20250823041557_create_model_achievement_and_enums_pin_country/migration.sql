/*
  Warnings:

  - You are about to drop the column `citizenship` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."Pin" AS ENUM ('BRONZE', 'GOLD', 'SILVER', 'PLATINUM', 'RUBY', 'ZAFIRO', 'EMERALD', 'DIAMOND', 'CROWN');

-- CreateEnum
CREATE TYPE "public"."Country" AS ENUM ('ARGENTINA', 'BRAZIL', 'CHILE', 'COLOMBIA', 'COSTA_RICA', 'EL_SALVADOR', 'GUATEMALA', 'HONDURAS', 'MEXICO', 'PANAMA', 'DOMINICAN_REPUBLIC', 'URUGUAY', 'VENEZUELA', 'USA');

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "citizenship",
ADD COLUMN     "country" "public"."Country";

-- CreateTable
CREATE TABLE "public"."Achievement" (
    "id" TEXT NOT NULL,
    "partnerCode" TEXT NOT NULL,
    "pin" "public"."Pin" NOT NULL,
    "country" "public"."Country" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);
