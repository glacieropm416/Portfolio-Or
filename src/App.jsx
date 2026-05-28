import Home from './pages/Home'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <CustomCursor />
      <ScrollToTop />
      <Home />
    </div>
  )
}

export default App