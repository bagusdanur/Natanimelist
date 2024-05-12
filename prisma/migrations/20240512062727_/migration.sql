-- CreateTable
CREATE TABLE "Favorites" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_image" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_user_email_anime_mal_id_key" ON "Favorites"("user_email", "anime_mal_id");
