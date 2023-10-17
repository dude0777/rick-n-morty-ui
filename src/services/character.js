export async function getCharacter(nme) {
    try {

        const apiUrl = `https://rickandmortyapi.com/api/character/?name=${nme}`;
        const response = await fetch(apiUrl);






        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}