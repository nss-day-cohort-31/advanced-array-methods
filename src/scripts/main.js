// console.log(businesses);

const outEl = document.querySelector("#output");

businesses.forEach(business => {
  /* CALCULATE ORDER SUMMARY */
  let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => {
      console.log(currentTotal, nextValue)
      return (currentTotal += nextValue)
    },
    0
  );

  outEl.innerHTML += `
      <h2>
          ${business.companyName}
          ($${totalOrders.toFixed(2)})
      </h2>
      <section>
          ${business.addressFullStreet}
      </section>
      <section>
          ${business.addressCity},
          ${business.addressStateCode}
          ${business.addressZipCode}
      </section>
  `;
  outEl.innerHTML += "<hr/>";
});
