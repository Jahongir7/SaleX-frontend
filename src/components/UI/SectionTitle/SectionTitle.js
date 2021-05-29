import FilterType1 from "./Filters/FilterType1/FilterType1";
import Clothes from "./Filters/Clothes/Clothes";
import Property from "./Filters/Property/Property";

import classes from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  /*
        filterType dan 'transport', 'equipment', 'jobs', 'clothes', 'property' kelsa ularga
        mos component qaytadi
    */
  const options = [
    { value: "cars", displayValue: "Cars" },
    { value: "jobs", displayValue: "Jobs" },
    { value: "services", displayValue: "Services" },
  ];

  let title = "Barcha e`lonlar";

  if (props.titleType === "filters") {
    title = "Filtrlar";
  }

  let filters = null;

  switch (props.filterType) {
    case "transport":
      filters = (
        <FilterType1
          firstInputType="select"
          firstInputOptions={options}
          firstInputLabel="Transport Bo`limi"
          secondInputType="select"
          secondInputOptions={options}
          secondInputLabel="Modeli"
          thirdInputType="select"
          thirdInputOptions={options}
          thirdInputLabel="Rusumi"
          lastInputType="input"
          lastInputLabel="Narxi"
        />
      );
      break;
    case "equipment":
      filters = (
        <FilterType1
          firstInputType="select"
          firstInputOptions={options}
          firstInputLabel="Telefon Bo`limi"
          secondInputType="select"
          secondInputOptions={options}
          secondInputLabel="Modeli"
          thirdInputType="select"
          thirdInputOptions={options}
          thirdInputLabel="Holati"
          lastInputType="input"
          lastInputLabel="Narxi"
        />
      );
      break;

    case "jobs":
      filters = (
        <FilterType1
          firstInputType="select"
          firstInputOptions={options}
          firstInputLabel="Ish tanlash"
          secondInputType="select"
          secondInputOptions={options}
          secondInputLabel="Bandlik turi"
          thirdInputType="select"
          thirdInputOptions={options}
          thirdInputLabel="Masofadan ishlash"
          lastInputType="input"
          lastInputLabel="Narxi"
        />
      );
      break;
    case "clothes":
      filters = (
        <Clothes firstInputOptions={options} secondInputOptions={options} />
      );
      break;
    case "property":
      filters = (
        <Property
          firstInputOptions={options}
          secondInputOptions={options}
          thirdInputOptions={options}
          fourthInputOptions={options}
        />
      );
      break;

    default:
      filters = null;
  }

  return (
    <div className={classes.SectionTitle}>
      <p className={`${title !== "Filtrlar" && classes.DesktopOnly}`}>
        {title}
      </p>
      {filters}
      <hr className={classes.DesktopOnly} />
    </div>
  );
};

export default SectionTitle;
