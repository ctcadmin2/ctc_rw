// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import VehiclesLayout from 'src/layouts/VehiclesLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Set wrap={VehiclesLayout}>
          <Route path="/vehicles/new" page={VehicleNewVehiclePage} name="newVehicle" />
          <Route path="/vehicles/{id:Int}/edit" page={VehicleEditVehiclePage} name="editVehicle" />
          <Route path="/vehicles/{id:Int}" page={VehicleVehiclePage} name="vehicle" />
          <Route path="/vehicles" page={VehicleVehiclesPage} name="vehicles" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
