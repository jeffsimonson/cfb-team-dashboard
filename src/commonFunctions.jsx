export const formatHeight = (inches) => {
    const feet = parseInt(inches / 12);
    const extraInches = inches % 12;
    return feet + "'" + extraInches + '"';
  }


export const formatHometown = (city, state, country) => {
    if (city === null) city = "";
    if (state === null) state = "";
    if (country === null) country ="USA";

    let fullHomeTown = city + ", " + state;
    if (country !== "USA" ) {
      fullHomeTown = fullHomeTown + ", " + country;
    }
    return fullHomeTown;
}