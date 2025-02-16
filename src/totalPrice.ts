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
