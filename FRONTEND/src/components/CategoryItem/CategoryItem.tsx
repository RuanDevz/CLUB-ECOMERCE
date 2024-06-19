import { FunctionComponent } from 'react'
import {Link} from 'react-router-dom'

// Utilities
import Category from '../../types/Categories.types'

// Styles
import './Categoryitem.css'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container font-primary"
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
        <Link to={`/${category.name}`}>
        <div className="category-name">
        <p>{category.displayname}</p>
        <p>Explorar</p>
      </div>
        </Link>
    </div>
  )
}

export default CategoryItem