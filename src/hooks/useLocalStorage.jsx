import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  // const [value, setValue] = useState(() => {
  //   try {
  //     const localValue = window.localStorage.getItem(key);
  //     return localValue ? JSON.parse(localValue) : initialValue;
  //   }
  //   catch(err) {
  //     console.log(err);
  //     return initialValue;
  //   }
  // })

  const [value, setValue] = useState(() => {
    if(typeof window !== "undefined") {
      const saved = window.localStorage.getItem(key);
      if(saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initialValue;
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  

  return [value, setValue];
}

export default useLocalStorage