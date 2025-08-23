/*
  Warnings:

  - The `roles` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN', 'GUEST');

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "roles",
ADD COLUMN     "roles" "public"."Role"[] DEFAULT ARRAY['USER']::"public"."Role"[];
