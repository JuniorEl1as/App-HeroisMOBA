import { AuthContextProvedor } from './context';
import Router from './routes';

export default function App() {
  return (
    <AuthContextProvedor>
      <Router />
    </AuthContextProvedor>
  );
};
