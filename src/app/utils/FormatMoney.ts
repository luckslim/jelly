 const Money = 1223;
 export const  FormatMoney = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(Money);