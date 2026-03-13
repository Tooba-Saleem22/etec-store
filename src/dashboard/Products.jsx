import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Phone", price: 500, image: "", description: "" },
    { id: 2, name: "Watch", price: 200, image: "", description: "" },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!newProduct.name || !newProduct.price) return;

    if (editId !== null) {
      // Update existing product
      setProducts(
        products.map((p) => (p.id === editId ? { ...p, ...newProduct } : p)),
      );
      setEditId(null);
    } else {
      // Add new product
      const id = products.length
        ? Math.max(...products.map((p) => p.id)) + 1
        : 1;
      setProducts([...products, { ...newProduct, id }]);
    }

    setNewProduct({ name: "", price: "", image: "", description: "" });
  };

  const handleEdit = (product) => {
    setNewProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    setEditId(product.id);
  };

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      {/* Add/Edit Product Form */}
      <div className="mb-6 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-2"
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Products List */}
      <ul>
        {products.map((p) => (
          <li key={p.id} className="mb-4 border p-2 rounded">
            <h3 className="font-semibold">
              {p.name} - ${p.price}
            </h3>
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="w-32 h-32 object-cover mt-2"
              />
            )}
            {p.description && (
              <p className="mt-2 text-gray-600">{p.description}</p>
            )}
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(p)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(p.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
