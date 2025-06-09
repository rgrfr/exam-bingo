
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
        min-h-[120px] flex flex-col items-center justify-center p-2
      `}
      onClick={onClick}
    >
      {isMarked && (
        <div className="absolute inset-0 bg-green-500 opacity-20 rounded-lg"></div>
      )}
      
      <div className={`text-center ${isMarked ? 'relative z-10' : ''}`}>
        <div className="mb-2">
          <Icon 
            size={32} 
            className={`mx-auto ${
              isMarked ? 'text-green-700' : 'text-blue-600'
            }`} 
          />
        </div>
        
        <div className="text-xs font-medium text-center leading-tight">
          {building.name}
        </div>
        
        {building.name === 'Day-off' && (
          <Badge variant="secondary" className="mt-1 text-xs bg-yellow-100 text-yellow-800">
            FREE
          </Badge>
        )}
      </div>
      
      {isMarked && (
        <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </Card>
  );
};
