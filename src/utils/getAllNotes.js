export const API_KEY = `dcOCoJtCjmWQBcOuFdVmkL`;
export const BASE_URL = `https://quintadb.com`;

export function getAllNotes() {
    return fetch(`${BASE_URL}/apps/cEW5T6W4joW45qWQZcNfKE/dtypes/entity/c_W6K1W71ew6vqkdW7xSox.json?rest_api_key=${API_KEY}&amp;view=`)
    .then(resp => resp.json())
    .catch()
}
