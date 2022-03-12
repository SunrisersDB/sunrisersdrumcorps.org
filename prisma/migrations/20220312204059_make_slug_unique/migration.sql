/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `NewsArticle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NewsArticle_slug_key" ON "NewsArticle"("slug");
