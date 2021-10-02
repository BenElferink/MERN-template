import {useState, useEffect} from 'react'

/* How to use this hook:
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return ();
}; */

export default function useMediaQuery(query = '(max-width: 768px)') {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [query])

  return matches
}
