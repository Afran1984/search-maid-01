import { Link, NavLink  } from 'react-router-dom'
import React, { useState } from 'react'
import Logo01 from "../../../public/img/LOGO.png";
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" className="bg-body-tertiary">
      <CContainer fluid>
        
        <CNavbarBrand href="#"><img className='h-10 w-10' src={Logo01} alt="" /></CNavbarBrand>
        <CNavbarBrand href="#">SEM Ltd.</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
            <CNavLink
              as={NavLink}
              to="/"
              end   // <-- important for exact matching
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </CNavLink>
          </CNavItem>
            <CNavItem>
            <CNavLink
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </CNavLink>
          </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}


export default Navbar
