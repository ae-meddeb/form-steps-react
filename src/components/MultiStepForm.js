import React from "react";
import { useState } from "react";
import { useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Address } from "./stepForm/Address";
import { Contact } from "./stepForm/Contact";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import { defaultData, steps } from "./helpers/formConf";


export const MultiStepForm = () => {
  const [dataForm, setDataForm] = useState(defaultData);
  

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { dataForm, setDataForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null
  }
};
