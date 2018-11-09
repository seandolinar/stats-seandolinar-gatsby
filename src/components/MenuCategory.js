import React from 'react';
import { Link, StaticQuery, NavLink } from 'gatsby';

import '../styles/menu_category.scss';

const MenuCategory = (props) => <StaticQuery
    query={graphql`
    query {
        allWordpressCategory {
            edges {
                node {
                id,
                slug,
                name
                }
            }
        }
    }`}
    render={data => {
        console.log(props)
        const menuItems = data.allWordpressCategory.edges.filter(({node},i) => {

            return ['stats', 'analytics', 'twitter', 'coding', 'javascript-coding', 'd3'].includes(node.slug)
        }).map(({node}) => {
            
            return <Link to={'/category/' + node.slug} activeClassName="isActive">{node.name}</Link>
        })

        

        return (
            <nav className="menu-category">{menuItems}</nav>
        )
    }}/>


export default MenuCategory


