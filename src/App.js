import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Line, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';

import { userStateContext } from './context/ContextProvider';

import './App.css'

const App = () => {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = userStateContext();

  
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zindex: '1000'}}>
            {/* Setting button */}
            <TooltipComponent content="Settings" position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' onClick={() => setThemeSettings(true)} style={{ background: currentColor, borderRadius: '50%' }}>
              <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' >
            <Sidebar />
          </div>
          ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
           <Sidebar />
            </div>
            )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full 
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'
            >
              <Navbar />
            </div>
          <div>

            {themeSettings && <ThemeSettings />}
            <Routes>

              {/* Dasboard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/e-commerce' element={<Ecommerce />} />

               {/*Pages  */}              
              <Route path='/ordini' element={<Orders />} />
              <Route path='/impiegati' element={<Employees />} />
              <Route path='/clienti' element={<Customers />} />
              
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendario" element={<Calendar />} />
              <Route path="/colore-scelta" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/linea" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/finanza" element={<Financial />} />
              <Route path="/mappa-colori" element={<ColorMapping />} />
              <Route path="/piramide" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>  
    </BrowserRouter>
  </div>
  )
};

export default App;