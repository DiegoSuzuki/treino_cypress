import OpenHome from '../support/actions/OpenHome'
import SearchItem from '../support/actions/SearchItem'
import SelectProduct from '../support/actions/SelectProduct'
import ViewDetailsProduct from '../support/actions/ViewDetailsProduct'
import ViewCart from '../support/actions/ViewCart'



describe('Inserir produto no carrinho', () => {

    it('Inserir produto no carrinho via card do produto', () => {
      OpenHome.navigate()
      SearchItem.find('processador')
      SelectProduct.clickbuy()
      ViewCart.goToCartPreCart()

    })

    it('Comprar item pesquisado', () => {
      OpenHome.navigate()
      SearchItem.find('processador')
      SelectProduct.viewDetails()
      ViewDetailsProduct.buy()
      ViewCart.goToCartPreCart()
    })

  })