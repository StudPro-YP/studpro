/**
 * A utility function to provide an image URL or a fallback image if the image doesn't exist
 * @param imagePath The path to the image
 * @returns A safe image URL
 */
export function getSafeImageUrl(imagePath: string): string {
	// List of known image paths that exist in the public directory
	const knownImages = [
		"/images/events/git-version-control.jpg",
		"/images/events/html-css-basics.jpg",
		"/images/events/javascript-intro.jpg",
		"/images/events/react-app.jpg",
		"/images/events/web-development-intro.jpg",
	];

	// If the image path is in the list of known images, return it; otherwise, return a fallback
	return knownImages.includes(imagePath)
		? imagePath
		: "/images/events/web-development-intro.jpg"; // Use a default image as fallback
}

export function getSafeTeamImageUrl(imagePath: string): string {
	// List of known team images that exist in the public directory
	const knownTeamImages = [
		"/images/team/vismini.png",
		"/images/team/chamod.png",
		"/images/team/dayantha.png",
		"/images/team/wishma.png",
		"/images/team/dilmith.png",
		"/images/team/minuri.png",
		"/images/team/dilshani.png",
		"/images/team/santhush.png",
		"/images/team/ashwinie.png",
		"/images/team/sandali.png",
		"/images/team/tharusha.png",
		"/images/team/dasunika.png",
		"/images/team/pesandu.png",
		"/images/team/sajitha.png",
		"/images/team/dasun.png",
		"/images/team/gihan.png",
	];

	// If the image path is in the list of known team images, return it; otherwise, return a fallback
	return knownTeamImages.includes(imagePath)
		? imagePath
		: "/images/team/avatar.jpg"; // Use a default image as fallback
}
