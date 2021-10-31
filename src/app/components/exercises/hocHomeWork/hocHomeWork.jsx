import React from "react";
import Card from "../../common/Card";
import Subtitle from "../../common/typografy/subtitle";
import withPropsStyles from "../../examples/hoc/withPropsStyles";
import SimpleComponent from "./simpleComponent";
import withSimpleComponent from "./withSimpleComponent";

const HocHomeWork = () => {
  const ComponentWithSimpleComponent = withSimpleComponent(SimpleComponent);
  const NewComponent = withPropsStyles(ComponentWithSimpleComponent);
  return (
    <Card>
      <Subtitle>Home Work</Subtitle>
      <NewComponent />
    </Card>
   );
};

export default HocHomeWork;
