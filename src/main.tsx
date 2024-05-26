import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import AuthProvider from "./context/AuthProvider.tsx";
import MessageProvider from "./context/MessageProvider.tsx";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
  </AuthProvider>
);
