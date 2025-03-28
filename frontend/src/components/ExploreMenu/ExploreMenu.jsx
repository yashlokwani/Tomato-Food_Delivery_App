import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import React from 'react'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item,index) => {
                    return (
                        <div key={index} className='explore-menu-list-item' onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ExploreMenu