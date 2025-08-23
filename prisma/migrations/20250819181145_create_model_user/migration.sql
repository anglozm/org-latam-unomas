-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "partnerCode" TEXT,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT,
    "lastName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "upline" TEXT,
    "pin" TEXT,
    "citizenship" TEXT NOT NULL,
    "roles" TEXT[],
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_partnerCode_key" ON "public"."User"("partnerCode");
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
