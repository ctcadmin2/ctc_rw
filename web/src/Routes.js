// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import CreditNotesLayout from 'src/layouts/CreditNotesLayout'
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
          <Route path="/vehicles" page={VehicleVehiclesPage} name="vehicles" />
        </Set>
        <Set wrap={CreditNotesLayout}>
          <Route path="/creditNotes/new" page={CreditNoteNewCreditNotePage} name="newCreditNote" />
          <Route path="/creditNotes/{id:Int}/edit" page={CreditNoteEditCreditNotePage} name="editCreditNote" />
          <Route path="/creditNotes/{id:Int}" page={CreditNoteCreditNotePage} name="creditNote" />
          <Route path="/creditNotes" page={CreditNoteCreditNotesPage} name="creditNotes" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
