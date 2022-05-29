-- CreateTable
CREATE TABLE "CreditNote" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT E'EUR',
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "start" TEXT,
    "end" TEXT,
    "week" INTEGER,
    "notes" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleId" INTEGER NOT NULL,

    CONSTRAINT "CreditNote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CreditNote" ADD CONSTRAINT "CreditNote_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
