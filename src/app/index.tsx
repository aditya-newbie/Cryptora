import AppProvider from "./provider";
import AppRouter from "./router";
import Header from "../components/Header";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-canvas text-white">
        <Header />
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;
