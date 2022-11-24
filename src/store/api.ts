const BASE_API="http://0.0.0.0:8080"
export const fetchTicker = (ticker: string) => {
    return fetch(`${BASE_API}/ticker?${new URLSearchParams({ticker})}`).then(r => r.json())
}

