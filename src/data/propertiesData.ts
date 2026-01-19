 import locationIcon from '/assets/icons/Location.svg';
import propertyIcon from '/assets/icons/property.svg';
import priceIcon from '/assets/icons/Union.svg';
import sizeIcon from '/assets/icons/Size.svg';
import buildIcon from '/assets/icons/Year.svg';
 
 
 export const filters = [
    { label: 'Location', icon: locationIcon, options: ['Any location', 'Downtown', 'City center','Suburbs','Near Beach'] },
    { label: 'Property Type', icon: propertyIcon, options: ['Any Type', 'Apartment', 'House','Villa','Studio','Office'] },
    { label: 'Pricing Range', icon: priceIcon, options: ['Any Price', 'Under $50,000','$50,000-$100,000','$100,000-$200,000','$200,000-$500,000','$500,000-$1,000,000','Over $1,000,000'] },
    { label: 'Property Size', icon: sizeIcon, options: ['Any Size', '50-100m','100-150m','150-250m','250+m'] },
    { label: 'Build Year', icon: buildIcon, options: ['New', '2017-2021', '2010-2016', '2000-2009','Before 2000'] }
  ];