-- CreateTable
CREATE TABLE "_PuzzleToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PuzzleToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Puzzle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PuzzleToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PuzzleToTeam_AB_unique" ON "_PuzzleToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_PuzzleToTeam_B_index" ON "_PuzzleToTeam"("B");
