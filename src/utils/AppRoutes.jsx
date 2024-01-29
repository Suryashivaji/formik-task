
import Dashboard from "../components/Dashboard"
import Create from "../components/Create"
import Edit from "../components/Edit"

const AppRoutes = [
 
  
 
  {
    path:'/',
    exact:true,
    element:<Dashboard/>

  },
  {
    path:'/create',
    exact:true,
    element:<Create/>
  },
  {
    path:"/edit/:id",
    exact:true,
    element:<Edit/>
  }

]

 export default AppRoutes;