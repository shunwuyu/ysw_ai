import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105 mx-auto">
     {/* AI语义 */}
     {/* <h1 className='text-3xl font-bold underline'>hello world, tailwindcss</h1> */}
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
          alt="" 
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
        </span>
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors">
          {/* 矢量图， 数学形状来画图， 支持无限的放大，不会模糊，区别于像素图 */}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          Premium Wireless HeadphonesPremium Wireless HeadphonesPremium Wireless Headphones
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
        Noise-cancelling, 30-hour battery life, premium sound quality.
        </p>
        <div className="flex items-center mt-2">
          <div className="flex">
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="ml-1 text-xs text-gray-500">4.4 (128 reviews)</span>
        </div>

        <div class="mt-3 flex items-center justify-between">
          <span class="text-xl font-bold text-gray-900">$199.99</span>
          <span class="text-sm text-gray-500 line-through">$249.99</span>
        </div>

        
        <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add to Cart
        </button>

        <button class="mt-2 w-full text-blue-600 hover:text-blue-800 text-sm font-medium">
          Quick View
        </button>

      </div>
    </div>
  )
}

export default App
