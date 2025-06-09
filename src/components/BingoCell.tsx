
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getIconForBuilding } from '../utils/iconMapping';

interface BingoCellProps {
  building: {
    name: string;
    type: string;
  };
  isMarked: boolean;
  onClick: () => void;
}

export const BingoCell: React.FC<BingoCellProps> = ({ building, isMarked, onClick }) => {
  const Icon = getIconForBuilding(building.type);
  
  return (
    <Card 
      className={`
        relative cursor-pointer transition-all duration-200 transform hover:scale-105
        ${isMarked 
          ? 'bg-green-100 border-green-400 shadow-md' 
          : 'bg-white hover:bg-blue-50 border-gray-200'
        }
        min-h-[80px] h-20 w-full flex flex-col items-center justify-center p-1
        print:min-h-[60px] print:h-16 print:hover:scale-100 print:shadow-none
      `}
      onClick={onClick}
    >
      {isMarked && (
        <div className="absolute inset-0 bg-green-500 opacity-20 rounded-lg"></div>
      )}
      
      <div className={`text-center ${isMarked ? 'relative z-10' : ''}`}>
        <div className="mb-1">
          <Icon 
            size={20} 
            className={`mx-auto print:w-4 print:h-4 ${
              isMarked ? 'text-green-700' : 'text-blue-600'
            }`} 
          />
        </div>
        
        <div className="text-xs font-medium text-center leading-tight px-1 print:text-[8px] print:leading-none">
          {building.name}
        </div>
        
        {building.name === 'Day-off' && (
          <Badge variant="secondary" className="mt-1 text-xs bg-yellow-100 text-yellow-800 print:text-[6px] print:mt-0 print:px-1 print:py-0">
            FREE
          </Badge>
        )}
      </div>
      
      {isMarked && (
        <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center print:w-2 print:h-2">
          <span className="text-white text-xs print:text-[8px]">✓</span>
        </div>
      )}
    </Card>
  );
};
