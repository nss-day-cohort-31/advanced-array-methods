// console.log(businesses);

const outEl = document.querySelector("#output");

document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
    console.log("key was pressed")
    if (keyPressEvent.charCode === 13) {
      console.log("the enter key")
      /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
      const foundBusiness = businesses.find(business =>
        business.companyName.includes(keyPressEvent.target.value)
      );

      outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
    }
  });
