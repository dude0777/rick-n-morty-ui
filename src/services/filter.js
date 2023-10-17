export async function getFilteredCharacters(gender = '', statuss = '', page = 1, name = '') {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&status=${statuss}&gender=${gender}&name=${name}`;
    console.log(apiUrl)
    const response = await fetch(apiUrl);

    const data = await response.json();
    return data;
}


