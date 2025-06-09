
export const buildingsData = [
  { name: 'Babbage LT', type: 'lecture-room' },
  { name: 'Biffen LT', type: 'lecture-room' },
  { name: 'Criminology', type: 'sherlock-holmes' },
  { name: 'Business School', type: 'judge' },
  { name: 'Mathematical Sciences', type: 'mathematics' },
  { name: 'Cockcroft LT', type: 'lecture-room' },
  { name: 'Corn Exchange', type: 'concert' },
  { name: 'Craik-Marshall', type: 'brain' },
  { name: 'Crausaz Wordsworth', type: 'conference' },
  { name: 'Biochemistry', type: 'test-tubes' },
  { name: 'Chemical Engineering', type: 'engineering' },
  { name: 'Chemistry', type: 'test-tubes' },
  { name: 'Earth Sciences', type: 'earth-science' },
  { name: 'Engineering', type: 'engineering' },
  { name: 'Genetics', type: 'dna' },
  { name: 'Materials Science', type: 'materials' },
  { name: 'Pathology', type: 'medical' },
  { name: 'Pharmacology', type: 'pharmacy' },
  { name: 'Physics', type: 'physics' },
  { name: 'Physiology', type: 'brain' },
  { name: 'Plant Sciences', type: 'plant' },
  { name: 'Psychology', type: 'psychology' },
  { name: 'Veterinary Medicine', type: 'veterinary' },
  { name: 'Zoology', type: 'animals' },
  { name: 'Exams Hall', type: 'office' },
  { name: 'Divinity', type: 'religious' },
  { name: 'English', type: 'shakespeare' },
  { name: 'Law', type: 'law' },
  { name: 'Music', type: 'music' },
  { name: 'Guildhall', type: 'town-hall' },
  { name: 'IoManufacturing', type: 'factory' },
  { name: 'Lady Mitchell Hall', type: 'lecture-room' },
  { name: 'Little Hall', type: 'lecture-room' },
  { name: 'Mary Allan Building', type: 'teacher' },
  { name: 'Phoenix TR', type: 'classroom' },
  { name: 'Sidgwick Lecture Block', type: 'lecture-room' },
  { name: 'Titan TR', type: 'classroom' },
  { name: 'University Centre', type: 'restaurant' },
  { name: 'University Printing', type: 'printing' },
  { name: 'Sports Hall', type: 'sports' },
  { name: 'William Gates Building', type: 'computer' }
];

// Create day-off spaces
const dayOffSpaces = Array(8).fill({ name: 'Day-off', type: 'day-off' });

// Combine all buildings with day-off spaces
const allSpaces = [...buildingsData, ...dayOffSpaces];

export const createGrids = () => {
  const grids = [];
  
  for (let i = 0; i < 4; i++) {
    // Shuffle the array for each grid
    const shuffled = [...allSpaces].sort(() => Math.random() - 0.5);
    grids.push(shuffled);
  }
  
  return grids;
};
