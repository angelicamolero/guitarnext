import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/normalize.css'
import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<any>([])

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart')!) ?? [];
    setCart(cartLS)
  }, [])


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))

  }, [cart])


  const addToCart = (product: any) => {

    if (cart.some((art: any) => art.id === product.id)) {
      const updatedCart = cart.map((art: any) => {
        if (art.id === product.id) {
          art.quantity = product.quantity;
        }
        return art;
      })
      setCart(updatedCart)
      console.log('duplicated');
    } else {
      setCart([...cart, product])
    }


  }

  const updateQuantity = (product: any) => {
    const updatedCart = cart.map((art: any) => {
      if (art.id === product.id) {
        art.quantity = product.quantity;
      }
      return art;
    })

    setCart(updatedCart)
  }

  const deleteProduct = (id: number) => {
    const updateCart = cart.filter((art: any) => art.id !== id)
    setCart(updateCart)
  }


  return <Component {...pageProps} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} deleteProduct={deleteProduct} />
}

export default MyApp
