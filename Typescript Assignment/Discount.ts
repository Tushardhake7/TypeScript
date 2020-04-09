class ShopKeeper { 

    showDetails = (price: number) => {
        let result = (price * 50 / 100);
        console.log(result);
    }

    let discount = new ShopKeeper();
    discount.showDetails(300);

}

