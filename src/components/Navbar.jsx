import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Input } from 'antd'
import {BarsOutlined, SearchOutlined} from '@ant-design/icons'
import { useState,useEffect } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './ui/Alert-dialog.css'

const Navbar = () => {


const [bar,setBar] = useState(false);

const handleBar = (e) =>{
    preventDefault(e);
    setBar(!bar)
}
    const navbarProps = [
        {"name":"Sign Up","href":"/sign-up"},
        {"name":"Be a Seller","href":"/beaseller"},
        {"name":"My Kart","href":"/mykart"},
        {"name":"Sign In","href":"/sig-in"},
        {"name":"About us","href":"/About us"},

    ]
  return (
    <div className='navbar'>
      <div className='logo'>


        <img src='' width={125} height={40} alt='logo' />

      </div>


      <ul className='order-list'>
            {
                navbarProps.map((items) =>(
                    <li key={items.id} className='list'>
                        <Link to={items.href} className='order-link'>{items.name}</Link>
                    </li>
                ))
            }
      </ul>
      <Button className='sidebar-button'onClick={handleBar} type='search'><BarsOutlined /></Button>
      {
        bar && <ul>
              {
                navbarProps.map((items) =>(
                    <li key={items.id}>
                        <Link to={items.href} className='order-link'>{items.name}</Link>
                    </li>
                ))
            }
        </ul>
      }
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
      <Button type='default' className='search-button'>Search<SearchOutlined /></Button>
        </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className='AlertDialogOverlay'/>
      <AlertDialog.Content className='AlertDialogContent'>
      <AlertDialog.Title className="AlertDialogTitle">Search for your Favorite Product</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          <Input  type='search' placeholder='Search'/>
        </AlertDialog.Description>
        <Button type='default'>Search</Button>
      </AlertDialog.Content>
      </AlertDialog.Portal>
      </AlertDialog.Root>
      {alertDialog && (
        <div className='search'>
          <Input placeholder="Search" type='search'/>
        </div>
      )}
    </div>
  )
}

export default Navbar
