import Layout from "../components/Layout";
import styles from '../styles/Cart.module.css'
import Image from "next/image";
import { useState, useEffect } from "react";

interface cartI {
    cart: any;
    updateQuantity: (product: any) => void;
    deleteProduct: (id: number) => void;
}

const Cart = (props: cartI) => {
    const [total, setTotal] = useState(9)
    const { cart, updateQuantity, deleteProduct } = props

    useEffect(() => {
        const totalCalculator = cart.reduce((total: any, product: any) => total + (product.quantity * product.price), 0)
        setTotal(totalCalculator)
    }, [cart])

    return (
        <Layout
            page="Cart">
            <h1 className="heading"> Cart</h1>
            <main className={`contenedor ${styles.content}`}>
                <div className={styles.cart}>
                    <h2 className="heading">Items</h2>
                    {cart.length === 0 ? 'Cart is empty' : (
                        cart.map((product: any) => (
                            <div key={product.id} className={styles.product}>
                                <div>
                                    <Image
                                        layout="responsive"
                                        width={250}
                                        height={480}
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div>
                                    <p className={styles.name}>{product.name}</p>
                                    <div className={styles.quantity}>
                                        <p >Qty:</p>
                                        <select
                                            value={product.quantity}
                                            className={styles.select}
                                            onChange={(e: any) => updateQuantity({
                                                quantity: e.target.value,
                                                id: product.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                    <p className={styles.price}> ${product.price}</p>
                                    <p className={styles.subtotal}> Subtotal: $ <span>{product.price * product.quantity}</span></p>
                                </div>
                                <button
                                    type="button"
                                    className={styles.delete}
                                    onClick={() => deleteProduct(product.id)}>x</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.summary}>
                    <h3>Summary</h3>
                    {total > 0 ? (
                        <>
                            <p>Total: ${total}</p>
                        </>
                    ) : <p>NO ITEMS</p>}
                </div>
            </main>
        </Layout>
    )
}

export default Cart;