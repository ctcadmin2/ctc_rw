import { useLocation, navigate, routes } from '@redwoodjs/router'

import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Accordion, AccordionTab } from 'primereact/accordion'

const MainLayout = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div className="grid px-3">
      <div className="col-12 pb-5">
        <Menubar
          className="shadow-3"
          start={
            <Button
              label="CTCAdmin2"
              className="p-button-text"
              onClick={() => navigate(routes.home())}
            />
          }
          end={<Button label="Logout" className="p-button-text" />}
        />
      </div>
      <div className="hidden lg:block lg:col-3 xl:col-2">
        <Card className="shadow-3">
          <Button
            label="Vehicles"
            className="p-button-text w-full text-left border-none border-noround"
          />
          <Button
            label="Credit notes"
            className="p-button-text w-full text-left border-none border-noround"
          />
          <Button
            label="Credit invoices"
            className="p-button-text w-full text-left border-none  border-noround"
          />
          <Button
            label="National expenses"
            className="p-button-text w-full text-left border-none  border-noround"
          />
          <Button
            label="International expenses"
            className="p-button-text w-full text-left border-none  border-noround"
          />
          <Button
            label="Trip expenses"
            className="p-button-text w-full text-left border-none  border-noround"
          />
          <Button
            label="Companies"
            className={`p-button-text w-full text-left border-none border-noround ${
              pathname.split('/').pop === 'companies' &&
              'border-right-3 border-teal-500'
            }`}
            onClick={() => navigate(routes.companies())}
          />
          <Button
            label="Settings"
            className={`p-button-text w-full text-left border-none border-noround ${
              pathname.split('/').pop() === 'settings' &&
              'border-right-3 border-teal-500'
            }`}
            onClick={() => navigate(routes['settings']())}
          />
        </Card>
      </div>
      <div className="col-12 lg:col-9 xl:col-10 ">
        <Card
          title={pathname.split('/').pop()}
          className="text-center shadow-3 h-30rem"
        >
          {children}
        </Card>
      </div>
    </div>
  )
}

export default MainLayout

//  sm, md, lg, xl
