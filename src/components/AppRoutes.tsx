import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Home = lazy(() => import('./Home'));
const Contact = lazy(() => import('./Contact'));

export function AppRoutes() {
  useEffect(() => {
    import('./Home')
    import('./Contact')
  }, [])

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}