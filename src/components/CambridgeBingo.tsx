
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shuffle, RotateCcw, Download } from 'lucide-react';
import { BingoGrid } from './BingoGrid';
import { buildingsData, createGrids } from '../data/buildingsData';

export const CambridgeBingo = () => {
  const [currentGrid, setCurrentGrid] = useState(0);
  const [grids, setGrids] = useState<any[]>([]);
  const [markedCells, setMarkedCells] = useState<boolean[][]>([]);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  useEffect(() => {
    const newGrids = createGrids();
    setGrids(newGrids);
    setMarkedCells(Array(4).fill(null).map(() => Array(49).fill(false)));
  }, []);

  const handleCellClick = (index: number) => {
    const newMarkedCells = [...markedCells];
    newMarkedCells[currentGrid][index] = !newMarkedCells[currentGrid][index];
    setMarkedCells(newMarkedCells);
    
    checkForBingo(newMarkedCells[currentGrid]);
  };

  const checkForBingo = (marked: boolean[]) => {
    const lines: string[] = [];
    
    // Check rows
    for (let row = 0; row < 7; row++) {
      if (Array.from({length: 7}, (_, col) => marked[row * 7 + col]).every(Boolean)) {
        lines.push(`Row ${row + 1}`);
      }
    }
    
    // Check columns
    for (let col = 0; col < 7; col++) {
      if (Array.from({length: 7}, (_, row) => marked[row * 7 + col]).every(Boolean)) {
        lines.push(`Column ${col + 1}`);
      }
    }
    
    // Check diagonals
    if (Array.from({length: 7}, (_, i) => marked[i * 7 + i]).every(Boolean)) {
      lines.push('Main Diagonal');
    }
    if (Array.from({length: 7}, (_, i) => marked[i * 7 + (6 - i)]).every(Boolean)) {
      lines.push('Anti Diagonal');
    }
    
    setCompletedLines(lines);
  };

  const resetGrid = () => {
    const newMarkedCells = [...markedCells];
    newMarkedCells[currentGrid] = Array(49).fill(false);
    setMarkedCells(newMarkedCells);
    setCompletedLines([]);
  };

  const shuffleGrids = () => {
    const newGrids = createGrids();
    setGrids(newGrids);
    setMarkedCells(Array(4).fill(null).map(() => Array(49).fill(false)));
    setCompletedLines([]);
  };

  if (grids.length === 0) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 print:bg-white print:p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 print:mb-2">
          <h1 className="text-4xl font-bold text-primary mb-2 print:text-2xl print:mb-1">exam venue bingo</h1>
          <p className="text-muted-foreground text-lg print:hidden">mark the buildings you've visited to and then scream BINGO!</p>
        </div>

        {/* Controls - Hidden on print */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 print:hidden">
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((gridIndex) => (
              <Button
                key={gridIndex}
                variant={currentGrid === gridIndex ? "default" : "outline"}
                onClick={() => setCurrentGrid(gridIndex)}
                className="min-w-[100px]"
              >
                Grid {gridIndex + 1}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button onClick={shuffleGrids} variant="outline" className="flex items-center gap-2">
              <Shuffle className="w-4 h-4" />
              New Grids
            </Button>
            <Button onClick={resetGrid} variant="outline" className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset Grid
            </Button>
            <Button onClick={() => window.print()} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Print
            </Button>
          </div>
        </div>

        {/* Bingo Status - Hidden on print */}
        {completedLines.length > 0 && (
          <div className="text-center mb-6 print:hidden">
            <Card className="inline-block p-4 bg-green-50 border-green-200">
              <h2 className="text-2xl font-bold text-green-700 mb-2">🎉 BINGO! 🎉</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {completedLines.map((line, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                    {line}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Grid */}
        <div className="flex justify-center">
          <BingoGrid
            grid={grids[currentGrid]}
            markedCells={markedCells[currentGrid] || Array(49).fill(false)}
            onCellClick={handleCellClick}
          />
        </div>

        {/* Instructions - Hidden on print */}
        <div className="mt-8 text-center max-w-2xl mx-auto print:hidden">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">How to Play</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Click on buildings you've visited to mark them</li>
              <li>• Get a complete row, column, or diagonal to win BINGO!</li>
              <li>• Different grids available for multiple players</li>
              <li>• Print this page for a game on A4 paper</li>
              <li>• "Day-off" spaces are free spaces - mark them anytime!</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};
