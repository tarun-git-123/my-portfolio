import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import Home from "./components/Home";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhp, faLaravel,faJs,faVuejs,faReact,faBootstrap,faCss3Alt,faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faBars,faXmark,faDatabase} from '@fortawesome/free-solid-svg-icons'

library.add(faBars,faXmark,faPhp,faLaravel,faDatabase,faJs,faVuejs,faReact,faCss3Alt,faBootstrap,faHtml5)

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
