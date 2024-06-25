import { getPropertyById } from '../apiServices/propertyService';

export async function apartmentloader({ params }) {
    try {
        const apartment = await getPropertyById(params.id);
        return { apartment };
    } catch (error) {
        console.error('Failed to load apartment:', error);
        throw error;
    }
}
