import { FunctionComponent } from 'react'

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
      <div className="category-name">
        <p>{category.displayname}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem