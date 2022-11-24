const BASE_API="http://localhost:8080"
export const fetchTicker = (ticker: string) => {
    return fetch(`${BASE_API}/ticker?${new URLSearchParams({ticker})}`).then(r => r.json())
}

