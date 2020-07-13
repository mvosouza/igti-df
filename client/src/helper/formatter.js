const currencyFormatter = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

const formatCurrency = (value) => currencyFormatter.format(value);

export { formatCurrency };
