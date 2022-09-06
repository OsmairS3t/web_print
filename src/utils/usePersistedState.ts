//https://www.youtube.com/watch?v=ngVU74daJ8Y&t=581s
import { useState, useEffect } from "react";

function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}

export default usePersistedState;