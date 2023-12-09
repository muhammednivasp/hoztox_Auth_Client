import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import NotFound from './pages/notFoundPage/NotFound.jsx';
import AdminRoutes from './routes/AdminRoutes.jsx'
import UserRoutes from './routes/UserRoutes.jsx'

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
