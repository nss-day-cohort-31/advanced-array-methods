// console.log(businesses);

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  console.log(business.addressStateCode)
  let inNewYork = false

  if (business.addressStateCode === "NY") {
      inNewYork = true
  }

  return inNewYork
})

console.log(newYorkBusinesses)

const manufacturingBusinesses = businesses.filter(business => {
  if (business.companyIndustry === "Manufacturing"){
    return true
  } else {
    return false
  }
})

// const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

manufacturingBusinesses.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});
