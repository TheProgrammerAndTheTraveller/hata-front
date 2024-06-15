import apartmentcards from "../data/apartmentcards";

export function apartmentloader({ params }) {
    const apartment = apartmentcards[params.id-1];
    return { apartment };
}