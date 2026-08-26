import { AreaItem } from '../types';

export const areasData: AreaItem[] = [
  {
    name: 'Central Manchester & City Centre',
    borough: 'Manchester',
    postcodes: ['M1', 'M2', 'M3', 'M4', 'Castlefield', 'Ancoats', 'Northern Quarter', 'Deansgate', 'New Islington', 'Piccadilly'],
    popular: true
  },
  {
    name: 'Salford & MediaCityUK',
    borough: 'Salford',
    postcodes: ['M3', 'M5', 'M6', 'M50', 'Quays', 'Pendleton', 'Ordsall'],
    popular: true
  },
  {
    name: 'Didsbury & West Didsbury',
    borough: 'Manchester',
    postcodes: ['M20', 'East Didsbury', 'West Didsbury', 'Didsbury Village'],
    popular: true
  },
  {
    name: 'Chorlton & Whalley Range',
    borough: 'Manchester',
    postcodes: ['M21', 'M16', 'Chorlton-cum-Hardy', 'Chorlton Green'],
    popular: true
  },
  {
    name: 'Altrincham, Hale & Bowdon',
    borough: 'Trafford',
    postcodes: ['WA14', 'WA15', 'Timperley', 'Broadheath'],
    popular: true
  },
  {
    name: 'Sale & Stretford',
    borough: 'Trafford',
    postcodes: ['M33', 'M32', 'Brooklands', 'Ashton upon Mersey'],
    popular: true
  },
  {
    name: 'Stockport, Cheadle & Bramhall',
    borough: 'Stockport',
    postcodes: ['SK1', 'SK2', 'SK3', 'SK4', 'SK7', 'SK8', 'Heaton Moor', 'Heaton Chapel'],
    popular: true
  },
  {
    name: 'Prestwich & Whitefield',
    borough: 'Bury',
    postcodes: ['M25', 'M45', 'Sedgley Park', 'Besses o\' th\' Barn'],
    popular: false
  },
  {
    name: 'Fallowfield, Withington & Rusholme',
    borough: 'Manchester',
    postcodes: ['M14', 'M20', 'M13', 'Curry Mile', 'Victoria Park'],
    popular: false
  },
  {
    name: 'Wilmslow & Alderley Edge',
    borough: 'Cheshire East',
    postcodes: ['SK9', 'Handforth', 'Styal'],
    popular: false
  },
  {
    name: 'Urmston, Flixton & Davyhulme',
    borough: 'Trafford',
    postcodes: ['M41', 'Trafford Park'],
    popular: false
  },
  {
    name: 'Eccles, Monton & Worsley',
    borough: 'Salford',
    postcodes: ['M30', 'M28', 'Boothstown', 'Winton'],
    popular: false
  }
];

export function checkPostcodeCoverage(query: string): { covered: boolean; areaMatch?: AreaItem; message: string } {
  if (!query || query.trim().length === 0) {
    return { covered: false, message: 'Please enter a Manchester postcode or neighbourhood.' };
  }

  const cleanQuery = query.trim().toUpperCase().replace(/\s+/g, '');
  
  // Direct match with postcode prefixes (e.g. M1, M2, M20, SK4, WA14, etc.)
  for (const area of areasData) {
    // Check if query matches area name
    if (area.name.toUpperCase().includes(cleanQuery) || area.borough.toUpperCase().includes(cleanQuery)) {
      return {
        covered: true,
        areaMatch: area,
        message: `Great news! We provide full cleaning coverage in ${area.name} (${area.borough}).`
      };
    }
    
    // Check postcodes
    for (const pc of area.postcodes) {
      const cleanPC = pc.toUpperCase().replace(/\s+/g, '');
      if (cleanQuery.startsWith(cleanPC) || cleanPC.startsWith(cleanQuery) || area.postcodes.some(p => p.toUpperCase().includes(cleanQuery))) {
        return {
          covered: true,
          areaMatch: area,
          message: `Great news! ${area.name} (${area.borough}) is within our active Manchester service territory.`
        };
      }
    }
  }

  // If starts with standard Greater Manchester prefixes (M, SK, WA, BL, OL, WN)
  if (/^(M[0-9]|SK[0-9]|WA[1-9]|BL[0-9]|OL[0-9])/.test(cleanQuery)) {
    return {
      covered: true,
      message: `Yes! Postcode area "${query.toUpperCase()}" is within Greater Manchester and served by Renzo Cleaners teams.`
    };
  }

  return {
    covered: false,
    message: `We might still be able to accommodate your area around Greater Manchester! Please submit an enquiry or call us directly to check team availability.`
  };
}
