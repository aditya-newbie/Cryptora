import AppProvider from "./provider";
import AppRouter from "./router";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-canvas text-white">
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;
