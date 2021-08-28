const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
  .filter((names) => names.length > 0 && names.length !== '')
  .map((names) => names.toLocaleLowerCase());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
};

function calcCash(cash, own = 0) {
  const everyCash = cash;
  let total = own;
  everyCash.forEach((item) => {
    total += +item;
  });
  return total;
}

const money = calcCash(sponsors.cash);

const {eu: [eu1]} = sponsors;

function makeBusiness({
  owner,
  director = ' ',
  cash,
  emp,
}) {
  const sumSponsors = `${([...sponsors.eu, ...sponsors.rus]).join(',')}, unexpected sponsor`;
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
  console.log(`And we have a sponsors: ${sumSponsors}`);
  console.log(`Note. Be careful with  ${eu1}. It's a huge risk.`);
}

makeBusiness({
  owner: 'Sam',
  director: 'Victor',
  cash: money,
  emp: employersNames,
});
