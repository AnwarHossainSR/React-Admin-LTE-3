import './App.css';
import Header from './Header'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Dashboard from './Dashboard'
function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Sidebar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
