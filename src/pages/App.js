import React from "react"
import RavePaymentModal from "react-ravepayment"
import "../components/layout.css"

const KEY = process.env.RAVE_KEY

class App extends React.Component {
  state = {
    products: {
      product01: {
        item: "Baseball Cap",
        price: "10",
        description: "20% Linen, 80% Cotton",
        image:
          "https://res.cloudinary.com/fullstackmafia/image/upload/v1565114303/item_L_11979961_30148870_i3pvzq.jpg",
      },
      product02: {
        item: "T-Shirt",
        price: "20",
        description: "30% Polyester, 70% Cotton",
        image:
          "https://res.cloudinary.com/fullstackmafia/image/upload/v1565114321/240px-Blue_Tshirt_temnm4.jpg",
      },
      product03: {
        item: "Sweatpants",
        price: "30",
        description: "100% wool",
        image:
          "https://res.cloudinary.com/fullstackmafia/image/upload/v1565114340/13611675_16262991_300_fd7hks.jpg",
      },
      product04: {
        item: "Socks",
        price: "15",
        description: "50% Cotton, 50% Wool",
        image:
          "https://res.cloudinary.com/fullstackmafia/image/upload/v1565114360/sketch-socks_wpb2fh.png",
      },
      product05: {
        item: "Slides",
        price: "50",
        description: "100% Leather",
        image:
          "https://res.cloudinary.com/fullstackmafia/image/upload/v1565114638/mc5x0tqvkiey34yb4mdt.jpg",
      }
    },
    email: "ugwuraphael@gmail.com",
  }

  callback = response => {
    console.log(response)
  }

  close = () => {
    console.log("Payment closed")
  }

  getReference = () => {
    let text = ""
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.="

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
  }

  displayItems = () => {
    return Object.keys(this.state.products).map(productID => (
      <div>
        <h3>{this.state.products[productID].item}</h3>
        <h4>Price: ${this.state.products[productID].price} </h4>
        <p>Description: {this.state.products[productID].description}</p>
        <img
          width={240}
          src={this.state.products[productID].image}
          alt="Item view"
        />
        <RavePaymentModal
          amount={this.state.products[productID].price}
          text="Pay Here"
          class="payButton"
          currency="NGN"
          reference={this.getReference()}
          email={this.state.email}
          ravePubKey={KEY}
          callback={this.callback}
          close={this.close}
          isProduction={true}
          subaccounts={[
            {
              id: "RS_57EB8FB1A5267D5694996422E414D427"
            }
          ]}
            
          
          tag="button"
        />
      </div>
    ))
  }

  render() {
    return (
      <div className="App">
        <div class="grid-container">
            <div class="grid-item">
        {this.displayItems()}
        </div>
        </div>
      </div>
    )
  }
}

export default App;