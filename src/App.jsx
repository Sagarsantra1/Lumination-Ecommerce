import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StateContext>
        <BrowserRouter>
          <NavBar />
          <Toaster />
          <Layout />
          <Footer />
        </BrowserRouter>
      </StateContext>
    </QueryClientProvider>
  );
}

export default App;
