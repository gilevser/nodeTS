interface Props {
    price: number,
    discount: number,
    isInstallment: boolean,
    months: number,
    installmentPrice?: number
}

export const totalPrice = ({ price, discount, isInstallment, months }: Props): number => {

    const discountedPrice = price - (price * (discount / 100));

    return isInstallment ? discountedPrice / months : discountedPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price)
