
import React from 'react';
import { Card } from '@/components/ui/card';
import { BingoCell } from './BingoCell';

interface BingoGridProps {
  grid: any[];
  markedCells: boolean[];
  onCellClick: (index: number) => void;
}

export const BingoGrid: React.FC<BingoGridProps> = ({ grid, markedCells, onCellClick }) => {
  return (
    <Card className="p-6 bg-white shadow-lg">
      <div className="grid grid-cols-7 gap-2 max-w-4xl mx-auto">
        {grid.map((building, index) => (
          <BingoCell
            key={index}
            building={building}
            isMarked={markedCells[index]}
            onClick={() => onCellClick(index)}
          />
        ))}
      </div>
    </Card>
  );
};
