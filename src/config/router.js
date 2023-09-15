import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Single from '../screen/single';
import Home from '../screen/home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/:id",
      element: <Single />
    },
  ]);

export default router