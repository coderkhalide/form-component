import './App.css';
import DeviceForm from './components/DeviceForm';

const options = [
  { 
    value: 'Mario Kart 8 Switch Bundle', 
    label: 'Mario Kart 8 Switch Bundle', 
    price: { new: 100, used: 70, broken: 30 },
    image: 'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'

  },
  { 
    value: 'Fortnite Wildcat Switch Bundle', 
    label: 'Fortnite Wildcat Switch Bundle', 
    price: { new: 400, used: 300, broken: 100 },
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80'
  },
  { 
    value: 'PS5 Disc', 
    label: 'PS5 Disc', 
    price: { new: 350, used: 200, broken: 80 },
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
  },
]

function App() {
  return (
    <div className="App">
      <DeviceForm 
        options={options} 
        title="Buy something from me 😉"
        onSubmit={value => console.log(value)}
      />
    </div>
  );
}

export default App;
