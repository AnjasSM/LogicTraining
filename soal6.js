arkaFood = (foodPrice, voucher, mileage, tax) => {
    //promo = [[namaVoucher,discount,minimalBuy,maxDiscount]]
    let promo = [['ARKAFOOD5', 50, 50000, 50000], ['DITRAKTIRDEMY', 60, 25000, 30000]];
    let perKm = 3000;
    let firstKm = 5000;
    let delivery = Math.ceil(mileage - 1.5);
    let totalDelivery = firstKm + (delivery * perKm);
    let totalPay = 0;
    let foodTax = foodPrice * (5 / 100)

    if (voucher === promo[0][0]) {
        let discount = foodPrice * (promo[0][1] / 100);
        if (discount > promo[0][3]) {
            discount = promo[0][3]
        }
        if (foodPrice >= promo[0][2]) {
            if (mileage) {
                if (tax) {
                    totalPay = foodPrice - discount + totalDelivery + foodTax
                } else {
                    totalPay = foodPrice - discount + totalDelivery
                }
            } else {
                if (tax) {
                    totalPay = foodPrice - discount + foodTax
                } else {
                    totalPay = foodPrice - discount
                }
            }
        } else {
            if (mileage) {
                if (tax) {
                    totalPay = foodPrice + totalDelivery + foodTax
                } else {
                    totalPay = foodPrice + totalDelivery
                }
            } else {
                if (tax) {
                    totalPay = foodPrice + foodTtax
                } else {
                    totalPay = foodPrice
                }
            }
        }
    } else {
        let discount = foodPrice * (promo[1][1] / 100)
        if (discount > promo[1][3]) {
            discount = promo[1][3]
        }
        if (foodPrice >= promo[1][2]) {
            if (mileage) {
                if (tax) {
                    totalPay = foodPrice - discount + totalDelivery + foodTax
                } else {
                    totalPay = foodPrice - discount + totalDelivery
                }
            } else {
                if (tax) {
                    totalPay = foodPrice - discount + foodTax
                } else {
                    totalPay = foodPrice - discount
                }
            }
        } else {
            if (mileage) {
                if (tax) {
                    totalPay = foodPrice + totalDelivery + foodTax
                } else {
                    totalPay = foodPrice + totalDelivery
                }
            } else {
                if (tax) {
                    totalPay = foodPrice + foodTax
                } else {
                    totalPay = foodPrice
                }
            }
        }
    }

    return priceFormating(totalPay)
}

priceFormating = (idrFormat) => {
    let numberString = idrFormat.toString()
    let remains = numberString.length % 3
    let idr = 'Rp.' + numberString.substr(0, remains)
    let thousands = numberString.substr(remains).match(/\d{3}/g);

    if (thousands) {
        separator = remains ? '.' : '';
        idr += separator + thousands.join('.');
    }
    return idr;
};

console.log(arkaFood(75000, 'ARKAFOOD5', 5, false));
console.log(arkaFood(60000, 'DITRAKTIRDEMY', 7, true));

