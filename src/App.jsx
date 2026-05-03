import { useState } from 'react'
import Scene from './components/Scene'
import UI from './components/UI'

export default function App() {
  const [inStore, setInStore] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="w-full h-screen bg-black">
      <Scene 
        inStore={inStore} 
        setInStore={setInStore}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <UI 
        inStore={inStore}
        setInStore={setInStore}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  )
}
