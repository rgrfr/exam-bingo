
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
    <Card className="p-4 bg-white shadow-lg print:p-2 print:shadow-none">
      <div className="grid grid-cols-7 gap-1 max-w-3xl mx-auto print:gap-0.5 print:max-w-none">
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
