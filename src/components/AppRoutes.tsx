import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export function AppRoutes() {
  useEffect(() => {
    import('./Home')
    import('./About')
  }, [])

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </Suspense>
    </>
  )
}