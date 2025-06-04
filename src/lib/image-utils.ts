/**
 * A utility function to provide an image URL or a fallback image if the image doesn't exist
 * @param imagePath The path to the image
 * @returns A safe image URL
 */
export function getSafeImageUrl(imagePath: string): string {
  // List of known image paths that exist in the public directory
  const knownImages = [
    '/images/events/git-version-control.jpg',
    '/images/events/html-css-basics.jpg',
    '/images/events/javascript-intro.jpg',
    '/images/events/react-app.jpg',
    '/images/events/web-development-intro.jpg',
  ];
  
  // If the image path is in the list of known images, return it; otherwise, return a fallback
  return knownImages.includes(imagePath) 
    ? imagePath 
    : '/images/events/web-development-intro.jpg'; // Use a default image as fallback
}
