"use client";

import apolloClient from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Container from "./Shared/Container/Container";

interface AppProps {
  children: any;
}
const App: React.FC<AppProps> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-88px)]">
        <Container>
          <Navbar />
          {children}
        </Container>
      </div>
      <Footer />
    </ApolloProvider>
  );
};
export default App;
