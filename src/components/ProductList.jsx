import React from 'react';
import { products } from '../utils/dataUtils';
import { 
  inputGroupStyle, 
  productItemStyle, 
  selectStyle, 
  inputNumberStyle, 
  addButtonStyle, 
  removeButtonStyle 
} from '../styles/appStyles';

const ProductList = ({ items, onAdd, onRemove, onUpdate }) => {
  return (
    <div style={inputGroupStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h4 style={{ color: "#e30613", margin: "0" }}>Product List</h4>
        <button onClick={onAdd} style={addButtonStyle}>
          + Add Product
        </button>
      </div>
      {items.map((item, index) => (
        <div key={index} style={productItemStyle}>
          <select 
            value={item.product.name} 
            onChange={(e) => onUpdate(index, "product", products.find(p => p.name === e.target.value))}
            style={selectStyle}
          >
            {products.map((product) => (
              <option key={product.name} value={product.name}>{product.name}</option>
            ))}
          </select>
          <input 
            type="number" 
            min="1"
            value={item.quantity} 
            onChange={(e) => onUpdate(index, "quantity", Math.max(1, parseInt(e.target.value) || 1))} 
            style={inputNumberStyle}
            placeholder="Qty"
          />
          <input 
            type="number" 
            min="0"
            value={item.customPrice} 
            onChange={(e) => onUpdate(index, "customPrice", Math.max(0, parseInt(e.target.value) || 0))} 
            style={inputNumberStyle}
            placeholder="Price"
          />
          <button 
            onClick={() => onRemove(index)} 
            style={removeButtonStyle}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;