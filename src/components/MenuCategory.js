import React from 'react';
import { Link, StaticQuery } from 'gatsby';

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

        const arrCategories = ['stats', 'analytics', 'twitter', 'coding', 'javascript-coding', 'd3', 'all-articles']

        const menuItems = data.allWordpressCategory.edges.filter(({node},i) => {

            return arrCategories.includes(node.slug)
        })
        .sort(({node: nodeA}, {node: nodeB}) => arrCategories.indexOf(nodeA.slug) - arrCategories.indexOf(nodeB.slug))
        .map(({node}) => {
            
            return <Link to={'/category/' + node.slug} activeClassName="isActive" key={node.slug}>{node.name}</Link>
        })

        

        return (
            <nav className={'menu-category' + (props.isMenuMobileOpen ? ' is-open' : '')}>{menuItems}</nav>
        )
    }}/>


export default MenuCategory


