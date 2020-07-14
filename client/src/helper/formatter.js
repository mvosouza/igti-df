import moment from 'moment';

const currencyFormatter = Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

const formatCurrency = (value) => currencyFormatter.format(value);

const formatFullDate = (value) => {
  return moment(value).format('YYYY-MM-DD');
};

const formatYearMonth = (value) => {
  return moment(value).format('YYYY-MM');
};

export { formatCurrency, formatFullDate, formatYearMonth };
